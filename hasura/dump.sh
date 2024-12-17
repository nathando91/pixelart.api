#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

# Debug output (optional, can be removed for security)
echo "PROJECT_NAME: $PROJECT_NAME"
echo "DO_SPACES_ACCESS_KEY: $DO_SPACES_ACCESS_KEY"
echo "DO_SPACES_SECRET_KEY: $DO_SPACES_SECRET_KEY"
echo "DO_SPACES_REGION: $DO_SPACES_REGION"
echo "DO_SPACES_NAME: $DO_SPACES_NAME"
echo "HASURA_GRAPHQL_ADMIN_SECRET: $HASURA_GRAPHQL_ADMIN_SECRET"

# Search for a Docker container with a name that includes "tondevapi-database"
CONTAINER_NAME=$(docker ps --format "{{.Names}}" | grep "${PROJECT_NAME}.*database" | head -n 1)

# Check if a container was found
if [ -z "$CONTAINER_NAME" ]; then
    echo "Error: No container found"
    exit 1
fi

echo "Found container: $CONTAINER_NAME"

# Database credentials (replace these with your actual values or use environment variables)
POSTGRES_USER="postgres"
POSTGRES_DATABASE="postgres"

# Dump file name
DUMP_FILE="dump.sql"

# Run pg_dump inside the container
docker exec -t $CONTAINER_NAME pg_dump -U $POSTGRES_USER -d $POSTGRES_DATABASE > $DUMP_FILE

# Optional: Get current date and time for file naming
CURRENT_DATETIME=$(date +"%Y%m%d%H%M")
DUMP_FILE_CLOUD="${CURRENT_DATETIME}_dump.sql"

# Upload the dump file to DigitalOcean Spaces with the date prefix
s3cmd --access_key=$DO_SPACES_ACCESS_KEY \
      --secret_key=$DO_SPACES_SECRET_KEY \
      --host=$DO_SPACES_REGION.digitaloceanspaces.com \
      --host-bucket="%(bucket)s.$DO_SPACES_REGION.digitaloceanspaces.com" \
      put "$DUMP_FILE" s3://$DO_SPACES_NAME/$PROJECT_NAME/$DUMP_FILE_CLOUD

echo "Database dump uploaded to DigitalOcean Spaces: $DUMP_FILE_CLOUD"

# Cleaning up files older than 5 days
echo "Cleaning up files older than 5 days in DigitalOcean Spaces..."

# Get the current date in seconds since epoch
CURRENT_DATE=$(date +%s)
DAYS_LIMIT=5

# List all files in the bucket and process each file
s3cmd --access_key=$DO_SPACES_ACCESS_KEY \
      --secret_key=$DO_SPACES_SECRET_KEY \
      --host=$DO_SPACES_REGION.digitaloceanspaces.com \
      --host-bucket="%(bucket)s.$DO_SPACES_REGION.digitaloceanspaces.com" \
      ls s3://$DO_SPACES_NAME/$PROJECT_NAME/ | grep -v 'DIR' | while read -r line; do
    # Extract file name and date
    FILE_NAME=$(echo $line | awk '{print $4}')
    FILE_DATE=$(echo $line | awk '{print $1 " " $2}')

    # Convert the file date to seconds since epoch
    FILE_DATE_SECONDS=$(date -d "$FILE_DATE" +%s)

    # Calculate age in days
    AGE_IN_DAYS=$(( (CURRENT_DATE - FILE_DATE_SECONDS) / (60 * 60 * 24) ))

    # Check if the file is older than the limit
    if [ "$AGE_IN_DAYS" -gt "$DAYS_LIMIT" ]; then
        echo "Deleting $FILE_NAME (age: $AGE_IN_DAYS days)"
        s3cmd --access_key=$DO_SPACES_ACCESS_KEY \
              --secret_key=$DO_SPACES_SECRET_KEY \
              --host=$DO_SPACES_REGION.digitaloceanspaces.com \
              --host-bucket="%(bucket)s.$DO_SPACES_REGION.digitaloceanspaces.com" \
              del "$FILE_NAME"
    fi
done

echo "Cleanup completed."

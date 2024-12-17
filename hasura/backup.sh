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

# Use the environment variables in your commands
curl -d '{"opts": ["-a", "-O", "-x", "--inserts", "--exclude-schema=hdb_catalog"], "clean_output": true, "source": "default"}' \
    -H "x-hasura-admin-secret: $HASURA_GRAPHQL_ADMIN_SECRET" \
    http://localhost:$HASURA_PORT/v1alpha1/pg_dump > initDatabase.sql

hasura migrate create "init" --from-server --database-name default
hasura metadata export

# Files and folders to back up
BACKUP_ITEMS=(
  "./migrations"
  "./initDatabase.sql"
  "./metadata"
)
CURRENT_DATETIME=$(date +"%Y%m%d_%H%M%S")
# Upload each item to DigitalOcean Spaces
for item in "${BACKUP_ITEMS[@]}"; do
    s3cmd --access_key=$DO_SPACES_ACCESS_KEY \
          --secret_key=$DO_SPACES_SECRET_KEY \
          --host=$DO_SPACES_REGION.digitaloceanspaces.com \
          --host-bucket="%(bucket)s.$DO_SPACES_REGION.digitaloceanspaces.com" \
          sync "$item" s3://$DO_SPACES_NAME/$PROJECT_NAME/$CURRENT_DATETIME/ --region=$DO_SPACES_REGION
done
#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

cat <<EOF > config.yaml
version: 3
endpoint: http://localhost:$HASURA_PORT
metadata_directory: metadata
actions:
  kind: synchronous
  handler_webhook_baseurl: http://localhost:$PORT
admin_secret: $HASURA_GRAPHQL_ADMIN_SECRET
EOF

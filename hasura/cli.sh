curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
sudo apt-get install s3cmd

hasura migrate create "init" --from-server --database-name default
hasura metadata export
./dump.sh
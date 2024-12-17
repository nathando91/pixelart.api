require('dotenv').config();

const { CODEGEN_HASURA_ENDPOINT: endpoint, CODEGEN_HASURA_GRAPHQL_ADMIN_SECRET: secret } =
  process.env;

const COMMON_SCALAR_MAPPING = {
  uuid: 'string',
  date: 'string',
  jsonb: 'Record<string, any>',
  timestamptz: 'string',
  timestamp: 'string',
  citext: 'string',
  numeric: 'number',
};

const codeGenConfig = {
  generates: {
    'src/sdk/sdk.ts': {
      documents: ['src/**/*.graphql'],
      schema: [
        {
          [endpoint]: {
            headers: {
              'x-hasura-admin-secret': secret,
            },
          },
        },
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        gqlImport: 'graphql-request#gql',
        avoidOptionals: {
          object: false,
          field: false,
          inputValue: false,
        },
        scalars: COMMON_SCALAR_MAPPING,
      },
    },
  },
};

module.exports = codeGenConfig;
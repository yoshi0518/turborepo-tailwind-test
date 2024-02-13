import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_HASURA_API_URL ?? 'http://localhost:4000/v1/graphql']: {
        headers: {
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET ?? '',
        },
      },
    },
  ],
  documents: ['src/**/*.gql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/libs/gql/': {
      preset: 'client',
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;

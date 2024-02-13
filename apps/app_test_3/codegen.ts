import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'https://basic-lesson-yoshi.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': '0PFun6JUelzkH4MZ8Mi8jWeeuWPUSvoBDHkz4sIxJM5ZFS10sd3a67slxfGt3irQ',
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

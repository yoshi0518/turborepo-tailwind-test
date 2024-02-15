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
  documents: ['src/**/*.gql', 'src/**/*.ts'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/libs/gql/': {
      preset: 'client',
      plugins: [
        {
          // Custom Scalar の branded type 定義
          add: {
            content: `export type DateString = string & { readonly __brand: unique symbol }`,
          },
        },
      ],
      config: {
        useTypeImports: true,
        skipTypename: true,
        arrayInputCoercion: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
        scalars: {
          Date: 'DateString',
        },
        enumsAsTypes: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;

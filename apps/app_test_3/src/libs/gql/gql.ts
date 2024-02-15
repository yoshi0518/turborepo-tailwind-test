/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getUsers {\n    users {\n      id\n      name\n      created_at\n    }\n  }\n': types.GetUsersDocument,
  '\n  query getUser($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.GetUserDocument,
  '\n  query testUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.TestUsersDocument,
  '\n  query testUsersLocal {\n    users(order_by: { created_at: desc }) @client {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.TestUsersLocalDocument,
  '\n  query testUserids {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n':
    types.TestUseridsDocument,
  '\n  query testUserById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.TestUserByIdDocument,
  '\n  mutation createUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.CreateUserDocument,
  '\n  mutation deleteUser($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.DeleteUserDocument,
  '\n  mutation updateUser($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n':
    types.UpdateUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getUsers {\n    users {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query getUsers {\n    users {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getUser($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query getUser($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query testUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query testUsers {\n    users(order_by: { created_at: desc }) {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query testUsersLocal {\n    users(order_by: { created_at: desc }) @client {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query testUsersLocal {\n    users(order_by: { created_at: desc }) @client {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query testUserids {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n',
): (typeof documents)['\n  query testUserids {\n    users(order_by: { created_at: desc }) {\n      id\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query testUserById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  query testUserById($id: uuid!) {\n    users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation createUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  mutation createUser($name: String!) {\n    insert_users_one(object: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation deleteUser($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  mutation deleteUser($id: uuid!) {\n    delete_users_by_pk(id: $id) {\n      id\n      name\n      created_at\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  mutation updateUser($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n',
): (typeof documents)['\n  mutation updateUser($id: uuid!, $name: String!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {\n      id\n      name\n      created_at\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

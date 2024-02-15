import { gql } from 'graphql-request';

export const getUsers = gql`
  query getUsers {
    users {
      id
      name
      created_at
    }
  }
`;

export const getUser = gql`
  query getUser($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`;

export const TEST_USERS = gql`
  query testUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`;

export const TEST_USERS_LOCAL = gql`
  query testUsersLocal {
    users(order_by: { created_at: desc }) @client {
      id
      name
      created_at
    }
  }
`;

export const TEST_USERIDS = gql`
  query testUserids {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`;

export const TEST_USERBY_ID = gql`
  query testUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: uuid!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`;

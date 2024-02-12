import { GraphQLClient } from 'graphql-request';

import type { UserType } from '@/features/users/types';

import { hasuraApiUrl, hasuraAdminSecret } from '@/config';

import type { NextApiResponse } from 'next';

const client = new GraphQLClient(hasuraApiUrl, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

const query = `
  query getUsers {
    users {
      id
      name
      created_at
    }
  }
`;

export const handleGetList = async (res: NextApiResponse<UserType[] | { message: string }>) => {
  try {
    const data = await client.request<{ users: UserType[] }>(query);
    res.status(200).json(data.users);
  } catch (error) {
    console.log({ error });
  }
};

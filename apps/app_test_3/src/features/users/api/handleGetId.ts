import { GraphQLClient } from 'graphql-request';

import type { UserType } from '@/features/users/types';

import { hasuraApiUrl, hasuraAdminSecret } from '@/config';

import type { NextApiRequest, NextApiResponse } from 'next';

const client = new GraphQLClient(hasuraApiUrl, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

const query = `
  query getUser($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`;

export const handleGetId = async (req: NextApiRequest, res: NextApiResponse<UserType | { message: string }>) => {
  const params = { id: req.query.id };

  try {
    const data = await client.request<{ users_by_pk: UserType }>(query, params);
    res.status(200).json(data.users_by_pk);
  } catch (error) {
    console.log({ error });
  }
};

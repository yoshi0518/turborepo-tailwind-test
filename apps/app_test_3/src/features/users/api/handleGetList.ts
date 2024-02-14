import { GraphQLClient } from 'graphql-request';

import type { UserType } from '@/features/users/types';

import { GetUsersDocument } from '@/libs/gql/graphql';

import { hasuraApiUrl, hasuraAdminSecret } from '@/config';

import type { NextApiResponse } from 'next';


const client = new GraphQLClient(hasuraApiUrl, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

export const handleGetList = async (res: NextApiResponse<UserType[] | { message: string }>) => {
  try {
    const data = await client.request(GetUsersDocument);
    res.status(200).json(data.users);
  } catch (error) {
    console.log({ error });
  }
};

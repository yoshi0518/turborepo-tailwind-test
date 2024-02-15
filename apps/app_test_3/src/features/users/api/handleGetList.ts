import { GraphQLClient } from 'graphql-request';

import type { UserType } from '@/features/users/types';

import { GetUsersDocument, TestUseridsDocument } from '@/libs/gql/graphql';

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
    const test = await client.request(TestUseridsDocument);
    console.log(JSON.stringify(test));
    const data = await client.request(GetUsersDocument);
    res.status(200).json(data.users);
  } catch (error) {
    console.log({ error });
  }
};

import { GraphQLClient } from 'graphql-request';

import type { UserType } from '@/features/users/types';

import { GetUserDocument } from '@/libs/gql/graphql';
import type { GetUserQueryVariables } from '@/libs/gql/graphql';

import { hasuraApiUrl, hasuraAdminSecret } from '@/config';

import type { NextApiRequest, NextApiResponse } from 'next';

const client = new GraphQLClient(hasuraApiUrl, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': hasuraAdminSecret,
  },
});

export const handleGetId = async (req: NextApiRequest, res: NextApiResponse<UserType | { message: string }>) => {
  const params: GetUserQueryVariables = { id: req.query.id };

  try {
    const data = await client.request(GetUserDocument, params);
    res.status(200).json(data.users_by_pk);
  } catch (error) {
    console.log({ error });
  }
};

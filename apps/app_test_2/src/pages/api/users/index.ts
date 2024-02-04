import { NextApiHandler } from 'next';

import { fakeApiClient } from '@/libs/fakeApi';
import type { User } from '@/libs/fakeApi/@types';

import type { NextApiRequest, NextApiResponse } from 'next';

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body, status } = await fakeApiClient.api.v1.Users.get();

  if (status !== 200) res.status(500).json({ message: body });

  res.status(200).json(body);
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<User[] | { message: string }>) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
  }
};

export default handler;

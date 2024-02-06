import { NextApiHandler } from 'next';
import { getServerSession } from 'next-auth';

import { fakeApiClient } from '@/libs/fakeApi';
import type { Author } from '@/libs/fakeApi/@types';

import { authOptions } from '../../auth/[...nextauth]';

import type { NextApiRequest, NextApiResponse } from 'next';

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  const id = req.query.id;
  const { body, status } = await fakeApiClient.api.v1.Authors._id(Number(id)).get();

  if (status !== 200) res.status(500).json({ message: body });

  res.status(200).json(body);
};

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Author | { message: string }>) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
  }
};

export default handler;

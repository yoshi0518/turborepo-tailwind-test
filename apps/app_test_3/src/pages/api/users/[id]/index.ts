import { NextApiHandler } from 'next';

import { handleGetId } from '@/features/users/api/handleGetId';
import type { UserType } from '@/features/users/types';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<UserType | { message: string }>) => {
  switch (req.method) {
    case 'GET':
      return handleGetId(req, res);
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
  }
};

export default handler;

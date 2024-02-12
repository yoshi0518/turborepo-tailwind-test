import { NextApiHandler } from 'next';

import { handleGetList } from '@/features/users/api/handleGetList';
import type { UserType } from '@/features/users/types';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<UserType[] | { message: string }>) => {
  switch (req.method) {
    case 'GET':
      return handleGetList(res);
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
  }
};

export default handler;

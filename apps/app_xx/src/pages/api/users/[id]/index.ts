import { NextApiHandler } from 'next';
import { z } from 'zod';

import type { UserType } from '@/features/ssr/types';

import { withZod } from '@/utils/zod';

import type { NextApiRequest, NextApiResponse } from 'next';

const handleGet = withZod(
  z.object({
    query: z.object({ id: z.string() }),
  }),
  async (req, res) => {
    const id = req.query.id;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (response.status !== 200) res.status(500).json({ message: response.statusText });

    res.status(200).json(await response.json());
  },
);

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<UserType | { message: string }>) => {
  switch (req.method) {
    case 'GET':
      return handleGet(req, res);
    default:
      res.status(405).json({ message: 'Method Not Allowed' });
      return;
  }
};

export default handler;

import type { UserType } from '@/features/ssr/types';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<UserType[] | { message: string }>) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (response.status !== 200) res.status(500).json({ message: response.statusText });

  res.status(200).json(await response.json());
};

export default handler;

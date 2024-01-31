import type { PostType } from '@/features/posts/types';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<PostType | { message: string }>) => {
  const { id } = req.query;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (response.status !== 200) res.status(500).json({ message: response.statusText });

  res.status(200).json(await response.json());
};

export default handler;

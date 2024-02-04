import axios from 'axios';

import { PostType } from '../types';

/** 投稿を取得 */
export const readPost = async (id: string) => {
  const response = await axios.get<PostType>(`http://localhost:3000/api/posts/${id}`);
  return response.data;
};

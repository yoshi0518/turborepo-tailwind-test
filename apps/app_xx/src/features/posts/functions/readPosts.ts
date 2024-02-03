import axios from 'axios';

import { PostType } from '../types';

/** 投稿一覧を取得 */
export const readPosts = async () => {
  const response = await axios.get<PostType[]>('http://localhost:3000/api/posts');
  return response.data;
};

import { bffApiClient } from '@/libs/bffApi';

/** 投稿一覧を取得 */
export const readPosts = async () => {
  const { body } = await bffApiClient.api.posts.get();
  return body;
};

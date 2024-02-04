import { bffApiClient } from '@/libs/bffApi';

/** 投稿を取得 */
export const readPost = async (id: string) => {
  const { body } = await bffApiClient.api.posts._id(id).get();
  return body;
};

import { bffApiClient } from '@/libs/bffApi';

/** ユーザーを取得 */
export const readUser = async (id: number) => {
  const { body } = await bffApiClient.api.users._id(id).get();
  return body;
};

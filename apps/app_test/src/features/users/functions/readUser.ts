import { bffApiClient } from '@/libs/bffApi';

/** ユーザーを取得 */
export const readUser = async (id: number) => {
  const { body, status, headers } = await bffApiClient.api.v1.users._id(id).get();
  return { body, status, headers };
};

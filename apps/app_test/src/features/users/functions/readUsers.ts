import { bffApiClient } from '@/libs/bffApi';

/** ユーザーを取得 */
export const readUsers = async () => {
  const { body, status, headers } = await bffApiClient.api.v1.users.get();
  return { body, status, headers };
};

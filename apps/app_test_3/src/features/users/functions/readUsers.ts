import { bffApiClient } from '@/libs/bffApi';

/** ユーザー一覧を取得 */
export const readUsers = async () => {
  const { body } = await bffApiClient.api.users.get();
  return body;
};

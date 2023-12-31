import { bffApiClient } from '@/libs/bffApi';

/** 著者を取得 */
export const readAuthor = async (id: number) => {
  const { body, status, headers } = await bffApiClient.api.v1.authors._id(id).get();
  return { body, status, headers };
};

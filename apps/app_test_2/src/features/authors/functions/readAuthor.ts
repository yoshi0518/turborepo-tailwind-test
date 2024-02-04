import { bffApiClient } from '@/libs/bffApi';

/** 著者を取得 */
export const readAuthor = async (id: number) => {
  const { body } = await bffApiClient.api.authors._id(id).get();
  return body;
};

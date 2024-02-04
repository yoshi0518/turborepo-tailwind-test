import { bffApiClient } from '@/libs/bffApi';

/** 著者一覧を取得 */
export const readAuthors = async () => {
  const { body } = await bffApiClient.api.authors.get();
  return body;
};

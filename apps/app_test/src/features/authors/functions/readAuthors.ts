import { bffApiClient } from '@/libs/bffApi';

/** 著者一覧を取得 */
export const readAuthors = async () => {
  const { body, status, headers } = await bffApiClient.api.v1.authors.get();
  return { body, status, headers };
};

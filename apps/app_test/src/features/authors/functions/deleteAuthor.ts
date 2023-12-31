import { bffApiClient } from '@/libs/bffApi';

/** 著者を削除 */
export const deleteAuthor = async (id: number) => await bffApiClient.api.v1.authors._id(id).delete();

import { bffApiClient } from '@/libs/bffApi';
import type { Author } from '@/libs/fakeApi/@types';

/** 著者を登録 */
export const createAuthor = async (body: Author) => await bffApiClient.api.v1.authors.post({ body });

import useSWR, { useSWRConfig } from 'swr';

import type { Author } from '@/libs/fakeApi/@types';

import { middleDedupingInterval } from '@/config';

import { authorKey } from './key';
import { readAuthors } from '../functions/readAuthors';

/** 著者一覧を取得 */
export const useReadAuthors = (fallbackData: Author[]) => {
  const {
    data: authors,
    error,
    isLoading,
  } = useSWR(authorKey.listAll(), readAuthors, {
    dedupingInterval: middleDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(authorKey.listAll());

  return { authors, error, isLoading, update };
};

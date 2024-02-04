import useSWR, { useSWRConfig } from 'swr';

import type { Author } from '@/libs/fakeApi/@types';

import { shortDedupingInterval } from '@/config';

import { authorKey } from './key';
import { readAuthor } from '../functions/readAuthor';

/** 著者を取得 */
export const useReadAuthor = (id: number, fallbackData: Author) => {
  const {
    data: author,
    error,
    isLoading,
  } = useSWR(authorKey.detail(id), () => readAuthor(id), {
    dedupingInterval: shortDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(authorKey.detail(id));

  return { author, error, isLoading, update };
};

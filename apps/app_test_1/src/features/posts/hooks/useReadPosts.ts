import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { readPosts } from '../functions/readPosts';
import { postKey } from '../hooks/key';

import type { PostType } from '../types';

/** 投稿一覧を取得 */
export const useReadPosts = (fallbackData: PostType[]) => {
  const {
    data: posts,
    error,
    isLoading,
  } = useSWR(postKey.listAll(), readPosts, {
    dedupingInterval: middleDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(postKey.listAll());

  return { posts, error, isLoading, update };
};

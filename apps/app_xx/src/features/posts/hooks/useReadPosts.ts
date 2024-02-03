import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { readPosts } from '../functions/readPosts';
import { postKey } from '../hooks/key';

import type { PostType } from '../types';

/** 投稿一覧を取得 */
export const useReadPosts = (fallbackData: PostType[]) => {
  const {
    data: posts,
    error: errorPosts,
    isLoading: isLoadingPosts,
  } = useSWR(postKey.listAll(), readPosts, {
    dedupingInterval: middleDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const mutatePosts = () => mutate(postKey.listAll());

  return { posts, errorPosts, isLoadingPosts, mutatePosts };
};

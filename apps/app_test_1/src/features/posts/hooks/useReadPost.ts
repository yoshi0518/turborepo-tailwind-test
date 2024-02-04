import useSWR, { useSWRConfig } from 'swr';

import { shortDedupingInterval } from '@/config';

import { readPost } from '../functions/readPost';
import { postKey } from '../hooks/key';

import type { PostType } from '../types';

/** 投稿を取得 */
export const useReadPost = (id: string, fallbackData: PostType) => {
  const {
    data: post,
    error,
    isLoading,
  } = useSWR(postKey.detail(id), () => readPost(id), {
    dedupingInterval: shortDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(postKey.detail(id));

  return { post, error, isLoading, update };
};

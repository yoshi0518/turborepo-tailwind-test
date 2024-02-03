import useSWR, { useSWRConfig } from 'swr';

import { shortDedupingInterval } from '@/config';

import { readPost } from '../functions/readPost';
import { postKey } from '../hooks/key';


/** 投稿を取得 */
export const useReadPost = (id: string) => {
  const {
    data: post,
    error: errorPost,
    isLoading: isLoadingPost,
  } = useSWR(postKey.detail(id), () => readPost(id), {
    dedupingInterval: shortDedupingInterval,
  });
  const { mutate } = useSWRConfig();

  const mutatePost = () => mutate(postKey.detail(id));

  return { post, errorPost, isLoadingPost, mutatePost };
};

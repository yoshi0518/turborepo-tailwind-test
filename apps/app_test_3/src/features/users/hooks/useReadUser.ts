import useSWR, { useSWRConfig } from 'swr';

import { shortDedupingInterval } from '@/config';

import { userKey } from './key';
import { readUser } from '../functions/readUser';

/** ユーザーを取得 */
export const useReadUser = (id: string) => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(userKey.detail(id), () => readUser(id), {
    dedupingInterval: shortDedupingInterval,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(userKey.detail(id));

  return { user, error, isLoading, update };
};

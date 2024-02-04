import useSWR, { useSWRConfig } from 'swr';

import { shortDedupingInterval } from '@/config';

import { readUser } from '../functions/readUser';
import { userKey } from '../hooks/key';

import type { UserType } from '../types';


/** ユーザーを取得 */
export const useReadUser = (id: string, fallbackData: UserType) => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(userKey.detail(id), () => readUser(id), {
    dedupingInterval: shortDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(userKey.detail(id));

  return { user, error, isLoading, update };
};

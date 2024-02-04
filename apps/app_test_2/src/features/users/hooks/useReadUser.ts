import useSWR, { useSWRConfig } from 'swr';

import type { User } from '@/libs/fakeApi/@types';

import { shortDedupingInterval } from '@/config';

import { userKey } from './key';
import { readUser } from '../functions/readUser';

/** ユーザーを取得 */
export const useReadUser = (id: number, fallbackData: User) => {
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

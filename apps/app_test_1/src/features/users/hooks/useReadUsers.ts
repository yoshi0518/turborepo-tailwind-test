import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { readUsers } from '../functions/readUsers';
import { userKey } from '../hooks/key';

import type { UserType } from '../types';

/** ユーザー一覧を取得 */
export const useReadUsers = (fallbackData: UserType[]) => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(userKey.listAll(), readUsers, {
    dedupingInterval: middleDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(userKey.listAll());

  return { users, error, isLoading, update };
};

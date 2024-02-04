import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { readUsers } from '../functions/readUsers';
import { userKey } from '../hooks/key';

import type { UserType } from '../types';

/** ユーザー一覧を取得 */
export const useReadUsers = (fallbackData: UserType[]) => {
  const {
    data: users,
    error: errorUsers,
    isLoading: isLoadingUsers,
  } = useSWR(userKey.listAll(), readUsers, {
    dedupingInterval: middleDedupingInterval,
    fallbackData,
  });
  const { mutate } = useSWRConfig();

  const mutateUsers = () => mutate(userKey.listAll());

  return { users, errorUsers, isLoadingUsers, mutateUsers };
};

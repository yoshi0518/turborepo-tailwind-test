import useSWR, { useSWRConfig } from 'swr';

import type { User } from '@/libs/fakeApi/@types';

import { middleDedupingInterval } from '@/config';

import { userKey } from './key';
import { readUsers } from '../functions/readUsers';

/** ユーザー一覧を取得 */
export const useReadUsers = (fallbackData: User[]) => {
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

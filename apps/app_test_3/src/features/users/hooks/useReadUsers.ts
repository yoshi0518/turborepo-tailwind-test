import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { userKey } from './key';
import { readUsers } from '../functions/readUsers';

/** ユーザー一覧を取得 */
export const useReadUsers = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useSWR(userKey.listAll(), readUsers, {
    dedupingInterval: middleDedupingInterval,
  });
  const { mutate } = useSWRConfig();

  const update = () => mutate(userKey.listAll());

  return { users, error, isLoading, update };
};

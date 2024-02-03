import useSWR, { useSWRConfig } from 'swr';

import { middleDedupingInterval } from '@/config';

import { readUsers } from '../functions/readUsers';
import { userKey } from '../hooks/key';


/** ユーザー一覧を取得 */
export const useReadUsers = () => {
  const {
    data: users,
    error: errorUsers,
    isLoading: isLoadingUsers,
  } = useSWR(userKey.listAll(), readUsers, {
    dedupingInterval: middleDedupingInterval,
  });
  const { mutate } = useSWRConfig();

  const mutateUsers = () => mutate(userKey.listAll());

  return { users, errorUsers, isLoadingUsers, mutateUsers };
};

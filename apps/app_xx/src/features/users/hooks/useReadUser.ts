import useSWR, { useSWRConfig } from 'swr';

import { shortDedupingInterval } from '@/config';

import { readUser } from '../functions/readUser';
import { userKey } from '../hooks/key';


/** ユーザーを取得 */
export const useReadUser = (id: string) => {
  const {
    data: user,
    error: errorUser,
    isLoading: isLoadingUser,
  } = useSWR(userKey.detail(id), () => readUser(id), {
    dedupingInterval: shortDedupingInterval,
  });
  const { mutate } = useSWRConfig();

  const mutateUser = () => mutate(userKey.detail(id));

  return { user, errorUser, isLoadingUser, mutateUser };
};

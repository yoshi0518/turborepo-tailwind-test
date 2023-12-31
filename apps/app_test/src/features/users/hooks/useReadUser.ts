import { useQuery } from '@tanstack/react-query';

import { queryStaleTimeMiddleEnv } from '@/config';

import { userKey } from './key.';
import { readUser } from '../functions/readUser';

/** ユーザーを取得 */
export const useReadUser = (id: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: userKey.detail(id),
    queryFn: () => readUser(id),
    staleTime: queryStaleTimeMiddleEnv,
  });

  return { data, isPending, isError };
};

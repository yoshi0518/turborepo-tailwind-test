import { useQuery } from '@tanstack/react-query';

import { queryStaleTimeMiddleEnv } from '@/config';

import { userKey } from './key.';
import { readUsers } from '../functions/readUsers';

/** ユーザー一覧を取得 */
export const useReadUsers = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: userKey.listAll(),
    queryFn: readUsers,
    staleTime: queryStaleTimeMiddleEnv,
    select: ({ body, status, headers }) => ({ body: body.slice(0, 20), status, headers }),
  });

  return { data, isPending, isError };
};

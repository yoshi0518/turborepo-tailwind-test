import { useQuery } from '@tanstack/react-query';

import { queryStaleTimeMiddleEnv } from '@/config';

import { authorKey } from './key';
import { readAuthors } from '../functions/readAuthors';

/** 著者一覧を取得 */
export const useReadAuthors = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: authorKey.listAll(),
    queryFn: readAuthors,
    staleTime: queryStaleTimeMiddleEnv,
    select: ({ body, status, headers }) => ({ body: body.slice(0, 20), status, headers }),
  });

  return { data, isPending, isError };
};

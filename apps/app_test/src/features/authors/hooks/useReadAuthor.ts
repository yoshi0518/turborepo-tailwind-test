import { useQuery } from '@tanstack/react-query';

import { queryStaleTimeMiddleEnv } from '@/config';

import { authorKey } from './key';
import { readAuthor } from '../functions/readAuthor';

/** 著者を取得 */
export const useReadAuthor = (id: number) => {
  const { data, isPending, isError } = useQuery({
    queryKey: authorKey.detail(id),
    queryFn: () => readAuthor(id),
    staleTime: queryStaleTimeMiddleEnv,
  });

  return { data, isPending, isError };
};

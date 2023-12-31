import { useMutation, QueryClient } from '@tanstack/react-query';

import { authorKey } from './key';
import { deleteAuthor } from '../functions/deleteAuthor';
const queryClient = new QueryClient();

/** 著者を削除 */
export const useDeleteAuthor = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (id: number) => deleteAuthor(id),
    onSuccess: (response) => {
      console.log({ response });
      queryClient.invalidateQueries({ queryKey: authorKey.listAll() });
    },
    onError: (error) => console.log(error),
  });

  return { mutate, isPending, isError };
};

import { useMutation, QueryClient } from '@tanstack/react-query';

import type { Author } from '@/libs/fakeApi/@types';

import { authorKey } from './key';
import { createAuthor } from '../functions/createAuthor';

const queryClient = new QueryClient();

/** 著者を登録 */
export const useCreateAuthor = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (body: Author) => createAuthor(body),
    onSuccess: (response) => {
      console.log({ response });
      queryClient.invalidateQueries({ queryKey: authorKey.listAll() });
    },
    onError: (error) => console.log(error),
  });

  return { mutate, isPending, isError };
};

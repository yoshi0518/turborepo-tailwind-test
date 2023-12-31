import { useMutation, QueryClient } from '@tanstack/react-query';

import type { User } from '@/libs/fakeApi/@types';

import { userKey } from './key.';
import { createUser } from '../functions/createUser';

const queryClient = new QueryClient();

/** ユーザーを登録 */
export const useCreateUser = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (body: User) => createUser(body),
    onSuccess: (response) => {
      console.log({ response });
      queryClient.invalidateQueries({ queryKey: userKey.listAll() });
    },
    onError: (error) => console.log(error),
  });

  return { mutate, isPending, isError };
};

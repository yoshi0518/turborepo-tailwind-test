import { useMutation, QueryClient } from '@tanstack/react-query';

import { userKey } from './key.';
import { deleteUser } from '../functions/deleteUser';
const queryClient = new QueryClient();

/** ユーザーを削除 */
export const useDeleteUser = () => {
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: (response) => {
      console.log({ response });
      queryClient.invalidateQueries({ queryKey: userKey.listAll() });
    },
    onError: (error) => console.log(error),
  });

  return { mutate, isPending, isError };
};

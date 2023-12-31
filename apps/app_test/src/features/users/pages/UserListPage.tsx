'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { User } from '@/libs/fakeApi/@types';
import { pagesPath } from '@/libs/path/$path';

import { useCreateUser } from '../hooks/useCreateUser';
import { useDeleteUser } from '../hooks/useDeleteUser';
import { useReadUsers } from '../hooks/useReadUsers';

export const UserListPage = () => {
  const router = useRouter();
  const { data, isPending, isError } = useReadUsers();
  const { mutate: createMutate } = useCreateUser();
  const { mutate: deleteMutate } = useDeleteUser();

  const createUserData: User = {
    id: 9999,
    userName: 'create-user-name',
    password: 'create-password',
  };

  const handleClick = (id: number) => {
    router.push(pagesPath.users._id(id).$url().path);
  };

  if (isError) return <div>Error</div>;
  if (isPending) return <div>Loading</div>;

  return (
    <>
      <h1 className="text-lg font-semibold">UserListPage</h1>
      <div>
        <NaBaseButton color="success" size="small" onClick={() => createMutate(createUserData)}>
          Create
        </NaBaseButton>
      </div>
      <main>
        {data.body.map((user) => (
          <div key={user.id} className="p-1">
            <span className="mr-2">
              <Link href={pagesPath.users._id(user.id).$url().path} className="underline">
                Id: {user.id}
              </Link>{' '}
              UserName: {user.userName} Password: {user.password}
            </span>
            <span className="mr-1">
              <NaBaseButton color="default" size="small" onClick={() => handleClick(user.id)}>
                Detail
              </NaBaseButton>
            </span>
            <span className="mr-1">
              <NaBaseButton color="danger" size="small" onClick={() => deleteMutate(user.id)}>
                Delete
              </NaBaseButton>
            </span>
          </div>
        ))}
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url().path)}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

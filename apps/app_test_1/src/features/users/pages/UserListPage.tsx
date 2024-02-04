import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { useReadUsers } from '../hooks/useReadUsers';

import type { UserType } from '../types';

import { appTitle } from '@/config';

export const UserListPage = ({ fallbackData }: { fallbackData: UserType[] }) => {
  const title = `UserList | ${appTitle}`;
  const router = useRouter();
  const { users, errorUsers, isLoadingUsers, mutateUsers } = useReadUsers(fallbackData);

  if (errorUsers) return <div>failed to load</div>;
  if (isLoadingUsers) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">UserListPage</h1>
      <main>
        <NaBaseButton color="info" onClick={mutateUsers}>
          Mutate
        </NaBaseButton>
        {users.map((user, index) => (
          <div key={index} className="mt-2">
            <div>ID：{user.id}</div>
            <div>
              Name：
              <Link href={pagesPath.users._id(user.id).$url()} className="text-blue-500">
                {user.name}
              </Link>
            </div>
            <div>Username：{user.username}</div>
            <div>Email：{user.email}</div>
            <div>Phone：{user.phone}</div>
            <div>Website：{user.website}</div>
          </div>
        ))}
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url())}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

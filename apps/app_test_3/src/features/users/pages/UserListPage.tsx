import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadUsers } from '../hooks/useReadUsers';

export const UserListPage = () => {
  const title = `UserList | ${appTitle}`;
  const router = useRouter();
  const { users, error, isLoading } = useReadUsers();

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">UserListPage</h1>
      <main>
        {users.map((user, index) => (
          <div key={index} className="mt-2">
            <div>ID：{user.id}</div>
            <div>
              Name：
              <Link href={pagesPath.users._id(user.id).$url()} className="text-blue-500">
                {user.name}
              </Link>
            </div>
            <div>CreatedAt：{user.created_at}</div>
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

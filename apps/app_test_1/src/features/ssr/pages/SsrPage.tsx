import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { UserType } from '@/features/ssr/types';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const SsrPage = ({ users }: { users: UserType[] }) => {
  const title = `Serverside Rendering | ${appTitle}`;
  const router = useRouter();

  if (typeof window !== 'undefined') {
    console.log('=== CSR ===');
    console.log({ users });
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">Serverside Rendering</h1>
      <main>
        {users.map((user, index) => (
          <div key={index} className="mt-2">
            <div>ID：{user.id}</div>
            <div>Name：{user.name}</div>
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

import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadUser } from '../hooks/useReadUser';

import type { UserType } from '../types';

export const UserDetailPage = ({ id, fallbackData }: { id: string; fallbackData: UserType }) => {
  const title = `UserDetail:${id} | ${appTitle}`;
  const router = useRouter();
  const { user, error, isLoading, update } = useReadUser(id, fallbackData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">UserDetailPage</h1>
      <main>
        <NaBaseButton color="info" onClick={update}>
          Mutate
        </NaBaseButton>
        <div className="mt-2">
          <div>ID：{user.id}</div>
          <div>Name：{user.name}</div>
          <div>Username：{user.username}</div>
          <div>Email：{user.email}</div>
          <div>Phone：{user.phone}</div>
          <div>Website：{user.website}</div>
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.users.$url())}>
          一覧へ移動
        </NaBaseButton>
      </div>
    </>
  );
};

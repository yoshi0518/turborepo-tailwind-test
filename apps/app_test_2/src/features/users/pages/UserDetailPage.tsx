import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { User } from '@/libs/fakeApi/@types';
import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadUser } from '../hooks/useReadUser';

export const UserDetailPage = ({ id, fallbackData }: { id: number; fallbackData: User }) => {
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
          <div>UserName：{user.userName}</div>
          <div>Password：{user.password}</div>
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

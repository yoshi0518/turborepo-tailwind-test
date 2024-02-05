import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const HomePage = () => {
  const title = `Home | ${appTitle}`;
  const router = useRouter();
  const { data: session } = useSession();

  console.log('=== Auth.js ===');
  console.log({ session });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">HomePage</h1>
      <div>ようこそ, {session.user && session.user.email}</div>

      {/* {
        // セッションがある場合
        session && (
          <main>
            <h1>ようこそ, {session.user && session.user.email}</h1>
            <NaBaseButton color="default" onClick={() => signOut()}>
              ログアウト
            </NaBaseButton>
          </main>
        )
      }
      {
        // セッションがない場合
        !session && (
          <main>
            <p>ログインしていません</p>
            <NaBaseButton color="info" onClick={() => signIn()}>
              ログイン
            </NaBaseButton>
          </main>
        )
      } */}
      <div>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.users.$url())} className="mr-2">
          UserListPageへ移動
        </NaBaseButton>
      </div>
      <div>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.authors.$url())} className="mr-2">
          AuthorListPageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const LogoutPage = () => {
  const title = `Logout | ${appTitle}`;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">LogoutPage</h1>

      <main>ログアウトが完了しました。</main>
      <div>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.auth.login.$url())} className="mr-2">
          ログインページへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

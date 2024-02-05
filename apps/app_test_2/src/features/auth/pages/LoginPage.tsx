import Head from 'next/head';
import { signIn } from 'next-auth/react';

import { NaBaseButton } from '@/components/NaBaseButton';

import { appTitle } from '@/config';

export const LoginPage = () => {
  const title = `Login | ${appTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">LoginPage</h1>

      <main>
        <NaBaseButton color="info" onClick={() => signIn()}>
          ログイン
        </NaBaseButton>
      </main>
    </>
  );
};

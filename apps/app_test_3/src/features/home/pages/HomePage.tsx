import Head from 'next/head';

import { appTitle } from '@/config';

export const HomePage = () => {
  const title = `Home | ${appTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">HomePage</h1>
      <main>
        <div>text text text text text</div>
        <div>text text text text text</div>
        <div>text text text text text</div>
      </main>
    </>
  );
};

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { appTitle } from '@/config';

export const RouterIndexPage = () => {
  const title = `RouterIndex | ${appTitle}`;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">RouterIndexPage</h1>
      <main>
        <div className="mt-1">
          <Link href="/router/1">TextLink 1</Link>
        </div>
        <div className="mt-1">
          <Link href="/router/2">TextLink 2</Link>
        </div>
        <div className="mt-1">
          <Link href="/router/3?hello=world&foo=bar">TextLink 3</Link>
        </div>
        <div className="mt-1">
          <NaBaseButton color="info" onClick={() => router.push('/router/1')}>
            ButtonLink 1
          </NaBaseButton>
        </div>
        <div className="mt-1">
          <NaBaseButton color="info" onClick={() => router.push('/router/2')}>
            ButtonLink 2
          </NaBaseButton>
        </div>
        <div className="mt-1">
          <NaBaseButton
            color="info"
            onClick={() => {
              const queryString = new URLSearchParams({
                hello: 'world',
                foo: 'bar',
              }).toString();
              const url = `/router/3?${queryString}`;
              router.push(url);
            }}
          >
            ButtonLink 3
          </NaBaseButton>
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push('/')}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

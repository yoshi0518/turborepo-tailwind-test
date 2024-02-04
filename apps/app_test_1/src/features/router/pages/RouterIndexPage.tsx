import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

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
          <Link href={pagesPath.router._id('1').$url()}>TextLink 1</Link>
        </div>
        <div className="mt-1">
          <Link href={pagesPath.router._id('2').$url()}>TextLink 2</Link>
        </div>
        <div className="mt-1">
          <Link href={pagesPath.router._id('3').$url({ query: { hello: 'world', foo: 'bar' } })}>TextLink 3</Link>
        </div>
        <div className="mt-1">
          <NaBaseButton color="info" onClick={() => router.push(pagesPath.router._id('1').$url())}>
            ButtonLink 1
          </NaBaseButton>
        </div>
        <div className="mt-1">
          <NaBaseButton color="info" onClick={() => router.push(pagesPath.router._id('2').$url())}>
            ButtonLink 2
          </NaBaseButton>
        </div>
        <div className="mt-1">
          <NaBaseButton
            color="info"
            onClick={() => router.push(pagesPath.router._id('3').$url({ query: { hello: 'world', foo: 'bar' } }))}
          >
            ButtonLink 3
          </NaBaseButton>
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url())}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

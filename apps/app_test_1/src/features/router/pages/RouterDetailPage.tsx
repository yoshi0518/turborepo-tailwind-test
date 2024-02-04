import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const RouterDetailPage = ({ params }: { params: { [key: string]: string } }) => {
  const title = `RouterDetail | ${appTitle}`;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">RouterDetailPage</h1>
      <main>
        <div>
          {Object.keys(params).map((key, index) => (
            <div key={index}>
              {key}：{params[key]}
            </div>
          ))}
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.router.$url())}>
          一覧へ移動
        </NaBaseButton>
      </div>
    </>
  );
};

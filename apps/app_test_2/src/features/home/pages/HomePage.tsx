import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

export const HomePage = () => {
  const title = `Home | ${appTitle}`;
  const router = useRouter();

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

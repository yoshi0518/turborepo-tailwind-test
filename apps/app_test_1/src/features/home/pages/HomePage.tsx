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
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.ui.$url())} className="mr-2">
          UiPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.form.$url())} className="mr-2">
          FormPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.env.$url())} className="mr-2">
          EnvPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.i18n.$url())} className="mr-2">
          I18nPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.local_storage.$url())} className="mr-2">
          LocalStoragePageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.router.$url())} className="mr-2">
          RouterPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.ssr.$url())} className="mr-2">
          SsrPageへ移動
        </NaBaseButton>
      </div>
      <div>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.users.$url())} className="mr-2">
          UserListPageへ移動
        </NaBaseButton>
      </div>
      <div>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.posts.$url())} className="mr-2">
          PostListPageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

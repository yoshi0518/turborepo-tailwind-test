import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

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
        <NaBaseButton variant="outline" onClick={() => router.push('/ui')} className="mr-2">
          UiPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push('/form')} className="mr-2">
          FormPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push('/env')} className="mr-2">
          EnvPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push('/i18n')} className="mr-2">
          I18nPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push('/local-storage')} className="mr-2">
          LocalStoragePageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push('/router')} className="mr-2">
          RouterPageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

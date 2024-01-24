import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import { appTitle, appUrl, storagePrefix } from '@/config';

export const EnvPage = () => {
  const title = `Env | ${appTitle}`;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">EnvPage</h1>
      <main>
        <div>AppUrl: {appUrl}</div>
        <div>StoragePrefix: {storagePrefix}</div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push('/')}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

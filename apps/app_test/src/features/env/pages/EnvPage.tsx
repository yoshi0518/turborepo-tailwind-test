'use client';

import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appUrlEnv, storagePrefixEnv } from '@/config';

export const EnvPage = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="text-lg font-semibold">EnvPage</h1>
      <main>
        <div>AppUrl: {appUrlEnv}</div>
        <div>StoragePrefix: {storagePrefixEnv}</div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url().path)}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

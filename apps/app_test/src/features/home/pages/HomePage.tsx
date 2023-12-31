'use client';

import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

export const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <h1 className="text-lg font-semibold">HomePage</h1>
      <main>
        <div>text text text text</div>
        <div>text text text text</div>
        <div>text text text text</div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.ui.$url().path)} className="mr-2">
          UiPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.env.$url().path)} className="mr-2">
          EnvPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.i18n.$url().path)} className="mr-2">
          I18nPageへ移動
        </NaBaseButton>
        <NaBaseButton
          variant="outline"
          onClick={() => router.push(pagesPath.local_storage.$url().path)}
          className="mr-2"
        >
          LocalStoragePageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.authors.$url().path)} className="mr-2">
          AuthorListPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.users.$url().path)} className="mr-2">
          UserListPageへ移動
        </NaBaseButton>
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.form.$url().path)} className="mr-2">
          FormPageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

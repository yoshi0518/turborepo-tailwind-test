'use client';

import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { useI18nStore } from '@/stores/i18n';

import { useTranslationClient } from '@/utils/i18n/client';

export const I18nPage = () => {
  const lang = useI18nStore((store) => store.lang);
  const { t } = useTranslationClient(lang);
  const router = useRouter();

  return (
    <>
      <h1 className="text-lg font-semibold">I18nPage</h1>
      <main>
        <h2 className="font-medium">基本</h2>
        <div>{t('hello')}</div>
        <div>{t('hello', { lng: 'ja' })}</div>
        <div>{t('auth.login')}</div>

        <h2 className="mt-2 font-medium">代入</h2>
        <div>{t('name', { fn: 'Tanaka', ln: 'Taro' })}</div>

        <h2 className="mt-2 font-medium">複数</h2>
        <div>{t('comment', { count: 0 })}</div>
        <div>{t('comment', { count: 1 })}</div>
        <div>{t('comment', { count: 100 })}</div>

        <h2 className="mt-2 font-medium">Context</h2>
        <div>{t('comment', { context: 'good', count: 20 })}</div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url().path)}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

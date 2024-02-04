import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NaBaseButton } from '@/components/NaBaseButton';
import { NaBaseSelect } from '@/components/NaBaseSelect';

import { pagesPath } from '@/libs/path/$path';

import { useI18nStore } from '@/stores/i18n';

import { getStorageItem } from '@/utils/localStorage';

import { appTitle } from '@/config';

const languages = [
  { label: '日本語', value: 'ja' },
  { label: '英語', value: 'en' },
];
const defaultLng = getStorageItem('lng');

export const I18nPage = () => {
  const title = `I18n | ${appTitle}`;
  const router = useRouter();
  const [lng, setLng] = useState(defaultLng);
  const { t } = useTranslation();
  const changeLng = useI18nStore((store) => store.changeLng);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">I18nPage</h1>
      <div className="w-1/4">
        <NaBaseSelect
          value={lng}
          selectItems={languages}
          label="言語切替"
          onChange={(e) => {
            setLng(e.target.value);
            changeLng(e.target.value);
          }}
        />
      </div>
      <main className="mt-2">
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
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url())}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

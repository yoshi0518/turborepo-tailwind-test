import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useLayoutEffect, ChangeEvent } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import { NaBaseInput } from '@/components/NaBaseInput';

import useLocalStorage from '@/hooks/useLocalStorage';

import { appTitle } from '@/config';

export const LocalStoragePage = () => {
  const title = `LocalStorage | ${appTitle}`;
  const [value, setValue] = useState('');
  const { storageValue, setStorageValue } = useLocalStorage('key', 'initialValue');
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setStorageValue(e.target.value);
  };

  useLayoutEffect(() => setValue(storageValue), [storageValue]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">LocalStoragePage</h1>
      <main>
        <div>storageValue: {storageValue}</div>
        <div className="w-1/2">
          <NaBaseInput value={value} onChange={onChange} />
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push('/')}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

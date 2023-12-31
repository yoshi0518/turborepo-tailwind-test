'use client';

import { useRouter } from 'next/navigation';
import { useState, useLayoutEffect, ChangeEvent } from 'react';

import { NaBaseButton } from '@/components/NaBaseButton';
import { NaBaseInput } from '@/components/NaBaseInput';

import useLocalStorage from '@/hooks/useLocalStorage';

import { pagesPath } from '@/libs/path/$path';

export const LocalStoragePage = () => {
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
      <h1 className="text-lg font-semibold">LocalStoragePage</h1>
      <main>
        <div>storageValue: {storageValue}</div>
        <div className="w-1/2">
          <NaBaseInput value={value} onChange={onChange} />
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url().path)}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

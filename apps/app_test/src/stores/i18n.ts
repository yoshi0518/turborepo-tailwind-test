import { create } from 'zustand';

import { fallbackLng } from '@/utils/i18n';
import { getStorageItem, setStorageItem } from '@/utils/localStorage';

export type i18nStoreType = {
  lang: string;
  changeLang: (lang: string) => void;
};

/** localStrageから前回実行時の言語を取得 */
const getLang = () => {
  const lang = getStorageItem('lang');
  // localStrageに存在しない場合
  if (!lang) setStorageItem('lang', fallbackLng);
  return lang || fallbackLng;
};

export const useI18nStore = create<i18nStoreType>((set) => ({
  lang: getLang(),
  changeLang: (lang) => set({ lang }),
}));

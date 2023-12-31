import { storagePrefixEnv } from '@/config';

/** localStorageから取得 */
export type getStorageItemType = (key: string) => string;
export const getStorageItem: getStorageItemType = (key) => {
  if (typeof window !== 'undefined') return window.localStorage.getItem(`${storagePrefixEnv}${key}`);
};

/** localStorageへ追加 */
export type setStorageItemType = (key: string, value: string) => void;
export const setStorageItem: setStorageItemType = (key, value) => {
  if (typeof window !== 'undefined') window.localStorage.setItem(`${storagePrefixEnv}${key}`, value);
};

/** localStorageから削除 */
export type removeStorageItemType = (key: string) => void;
export const removeStorageItem: removeStorageItemType = (key) => {
  if (typeof window !== 'undefined') window.localStorage.removeItem(`${storagePrefixEnv}${key}`);
};

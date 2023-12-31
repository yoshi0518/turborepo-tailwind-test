'use client';

import i18next, { use, changeLanguage } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next, useTranslation as useTranslationOrg } from 'react-i18next';

import { getOptions, defaultNS } from '.';

use(initReactI18next)
  .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
  .init(getOptions());

export const useTranslationClient = (lng: string, ns: string = defaultNS) => {
  if (i18next.resolvedLanguage !== lng) changeLanguage(lng);
  return useTranslationOrg(ns);
};

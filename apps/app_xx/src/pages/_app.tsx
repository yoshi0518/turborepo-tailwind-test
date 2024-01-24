import { MantineProvider } from '@mantine/core';
import clsx from 'clsx';
import { use } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { Noto_Sans_JP } from 'next/font/google';
import Script from 'next/script';
import { initReactI18next } from 'react-i18next';
import { z } from 'zod';
import { zodI18nMap } from 'zod-i18n-map';

import { NaNotifications } from '@/components/NaNotifications';
import type { NaNotificationsProps } from '@/components/NaNotifications';

import { getStorageItem } from '@/utils/localStorage';

import type { AppProps } from 'next/app';

import { appLng, mantineCustomTheme } from '@/config';

import '@/styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

const lng = getStorageItem('lng');

use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: appLng,
    lng,
    ns: ['index'],
    debug: true,
    defaultNS: 'index',
    interpolation: {
      escapeValue: false,
    },
  });

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

const notificationsProps: NaNotificationsProps = {
  position: 'top-right',
  autoClose: 5000,
  containerWidth: 400,
  notificationMaxHeight: 250,
  limit: 5,
  zIndex: 1000,
};

const App = ({ Component, pageProps }: AppProps) => {
  z.setErrorMap(zodI18nMap);

  return (
    <>
      <div className={clsx('select-none p-2 text-sm', notoSansJp.className)}>
        <MantineProvider theme={mantineCustomTheme}>
          <Component {...pageProps} />
          <NaNotifications {...notificationsProps} />
        </MantineProvider>
      </div>
      <Script src="/main.js" defer />
    </>
  );
};

export default App;

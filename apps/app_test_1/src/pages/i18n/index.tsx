import { ReactElement } from 'react';

import { I18nPage } from '@/features/i18n/pages/I18nPage';

import { OtherLayout } from '@/layouts/other';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <I18nPage />;

Page.getLayout = (page: ReactElement) => <OtherLayout>{page}</OtherLayout>;

export default Page;

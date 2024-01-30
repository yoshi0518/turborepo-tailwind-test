import { ReactElement } from 'react';

import { UiPage } from '@/features/ui/pages/UiPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <UiPage />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

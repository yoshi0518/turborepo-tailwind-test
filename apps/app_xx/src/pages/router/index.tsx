import { ReactElement } from 'react';

import { RouterIndexPage } from '@/features/router/pages/RouterIndexPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <RouterIndexPage />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

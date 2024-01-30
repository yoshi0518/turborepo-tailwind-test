import { ReactElement } from 'react';

import { EnvPage } from '@/features/env/pages/EnvPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <EnvPage />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

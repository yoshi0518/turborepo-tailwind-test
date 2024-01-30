import { ReactElement } from 'react';

import { LocalStoragePage } from '@/features/localStorage/pages/LocalStoragePage';

import { OtherLayout } from '@/layouts/other';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <LocalStoragePage />;

Page.getLayout = (page: ReactElement) => <OtherLayout>{page}</OtherLayout>;

export default Page;

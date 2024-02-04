import { ReactElement } from 'react';

import { FormPage } from '@/features/form/pages/FormPage';

import { OtherLayout } from '@/layouts/other';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <FormPage />;

Page.getLayout = (page: ReactElement) => <OtherLayout>{page}</OtherLayout>;

export default Page;

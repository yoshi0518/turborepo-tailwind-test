import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { UserDetailPage } from '@/features/users/pages/UserDetailPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => {
  const { id } = useRouter().query;

  return <UserDetailPage id={id as string} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

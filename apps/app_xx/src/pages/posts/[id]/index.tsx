import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { PostDetailPage } from '@/features/posts/pages/PostDetailPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => {
  const { id } = useRouter().query;

  return <PostDetailPage id={id as string} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

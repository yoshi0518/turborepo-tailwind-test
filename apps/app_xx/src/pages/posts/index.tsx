import { ReactElement } from 'react';

import { PostListPage } from '@/features/posts/pages/PostListPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

const Page: NextPageWithLayout = () => <PostListPage />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

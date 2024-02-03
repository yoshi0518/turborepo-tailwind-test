import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { readPosts } from '@/features/posts/functions/readPosts';
import { PostListPage } from '@/features/posts/pages/PostListPage';
import type { PostType } from '@/features/posts/types';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await readPosts();
  return { props: { fallbackData: posts } };
};

const Page: NextPageWithLayout = ({ fallbackData }: { fallbackData: PostType[] }) => (
  <PostListPage fallbackData={fallbackData} />
);

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { readPost } from '@/features/posts/functions/readPost';
import { PostDetailPage } from '@/features/posts/pages/PostDetailPage';
import type { PostType } from '@/features/posts/types';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const post = await readPost(id as string);
  return { props: { fallbackData: post } };
};

const Page: NextPageWithLayout = ({ fallbackData }: { fallbackData: PostType }) => {
  const { id } = useRouter().query;

  return <PostDetailPage id={id as string} fallbackData={fallbackData} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

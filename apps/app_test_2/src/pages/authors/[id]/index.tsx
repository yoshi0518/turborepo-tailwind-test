import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { readAuthor } from '@/features/authors/functions/readAuthor';
import { AuthorDetailPage } from '@/features/authors/pages/AuthorDetailPage';

import { DefaultLayout } from '@/layouts/default';

import type { Author } from '@/libs/fakeApi/@types';

import type { CustomNextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const author = await readAuthor(Number(id));
  return { props: { fallbackData: author } };
};

const Page: CustomNextPage = ({ fallbackData }: { fallbackData: Author }) => {
  const { id } = useRouter().query;

  return <AuthorDetailPage id={Number(id)} fallbackData={fallbackData} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
Page.requireLogin = true;

export default Page;

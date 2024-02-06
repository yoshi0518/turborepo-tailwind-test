import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { readAuthors } from '@/features/authors/functions/readAuthors';
import { AuthorListPage } from '@/features/authors/pages/AuthorListPage';

import { DefaultLayout } from '@/layouts/default';

import type { Author } from '@/libs/fakeApi/@types';

import type { CustomNextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const authors = await readAuthors();
  return { props: { fallbackData: authors } };
};

const Page: CustomNextPage = ({ fallbackData }: { fallbackData: Author[] }) => (
  <AuthorListPage fallbackData={fallbackData} />
);

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
Page.requireLogin = true;

export default Page;

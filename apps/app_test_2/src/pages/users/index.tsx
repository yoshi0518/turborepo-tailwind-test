import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { readUsers } from '@/features/users/functions/readUsers';
import { UserListPage } from '@/features/users/pages/UserListPage';

import { DefaultLayout } from '@/layouts/default';

import type { User } from '@/libs/fakeApi/@types';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await readUsers();
  return { props: { fallbackData: users } };
};

const Page: NextPageWithLayout = ({ fallbackData }: { fallbackData: User[] }) => (
  <UserListPage fallbackData={fallbackData} />
);

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

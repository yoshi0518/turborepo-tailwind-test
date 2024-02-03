import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';

import { SsrPage } from '@/features/ssr/pages/SsrPage';
import type { UserType } from '@/features/ssr/types';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  console.log('=== SSR =====');
  console.log(users);

  return { props: { users } };
};

const Page: NextPageWithLayout = ({ users }: { users: UserType[] }) => <SsrPage users={users} />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { readUser } from '@/features/users/functions/readUser';
import { UserDetailPage } from '@/features/users/pages/UserDetailPage';

import { DefaultLayout } from '@/layouts/default';

import type { User } from '@/libs/fakeApi/@types';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const user = await readUser(Number(id));
  return { props: { fallbackData: user } };
};

const Page: NextPageWithLayout = ({ fallbackData }: { fallbackData: User }) => {
  const { id } = useRouter().query;

  return <UserDetailPage id={Number(id)} fallbackData={fallbackData} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { readUser } from '@/features/users/functions/readUser';
import { UserDetailPage } from '@/features/users/pages/UserDetailPage';
import type { UserType } from '@/features/users/types';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const user = await readUser(id as string);
  return { props: { fallbackData: user } };
};

const Page: NextPageWithLayout = ({ fallbackData }: { fallbackData: UserType }) => {
  const { id } = useRouter().query;

  return <UserDetailPage id={id as string} fallbackData={fallbackData} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

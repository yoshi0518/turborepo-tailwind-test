import { ReactElement } from 'react';

import { SsrPage } from '@/features/ssr/pages/SsrPage';
import type { UserType } from '@/features/ssr/types';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

export { getServerSideProps } from '@/features/ssr/functions/getServerSideProps';

const Page: NextPageWithLayout = ({ users }: { users: UserType[] }) => <SsrPage users={users} />;

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

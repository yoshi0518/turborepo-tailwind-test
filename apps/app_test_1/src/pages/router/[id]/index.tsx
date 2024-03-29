import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { RouterDetailPage } from '@/features/router/pages/RouterDetailPage';

import { DefaultLayout } from '@/layouts/default';

import type { NextPageWithLayout } from 'next';

/** Pathpidaクエリパラメータ */
export type OptionalQuery = Partial<{
  hello: string;
  foo: string;
}>;

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  console.log({ router });

  const params = {};
  Object.keys(router.query).forEach((key) => (params[key] = router.query[key]));

  return <RouterDetailPage params={params} />;
};

Page.getLayout = (page: ReactElement) => <DefaultLayout>{page}</DefaultLayout>;

export default Page;

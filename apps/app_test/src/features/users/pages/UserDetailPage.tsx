'use client';

import Link from 'next/link';

import { pagesPath } from '@/libs/path/$path';

import { useReadUser } from '../hooks/useReadUser';

export const UserDetailPage = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useReadUser(Number(id));

  if (isError) return <div>Error</div>;
  if (isPending) return <div>Loading</div>;

  return (
    <>
      <h1 className="text-lg font-semibold">UserDetailPage</h1>
      <main className="p-2">
        <div>id: {data.body.id}</div>
        <div>userName: {data.body.userName}</div>
        <div>password: {data.body.password}</div>
      </main>
      <div className="p-2">
        <Link href={pagesPath.users.$url().path}>戻る</Link>
      </div>
    </>
  );
};

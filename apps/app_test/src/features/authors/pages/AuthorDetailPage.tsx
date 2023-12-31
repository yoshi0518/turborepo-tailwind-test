'use client';

import Link from 'next/link';

import { pagesPath } from '@/libs/path/$path';

import { useReadAuthor } from '../hooks/useReadAuthor';

export const AuthorDetailPage = ({ id }: { id: string }) => {
  const { data, isPending, isError } = useReadAuthor(Number(id));

  if (isError) return <div>Error</div>;
  if (isPending) return <div>Loading</div>;

  return (
    <>
      <h1 className="text-lg font-semibold">AuthorDetailPage</h1>
      <main className="p-2">
        <div>id: {data.body.id}</div>
        <div>firstName: {data.body.firstName}</div>
        <div>lastName: {data.body.lastName}</div>
      </main>
      <div className="p-2">
        <Link href={pagesPath.authors.$url().path}>戻る</Link>
      </div>
    </>
  );
};

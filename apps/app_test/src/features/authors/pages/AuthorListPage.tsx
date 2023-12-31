'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { Author } from '@/libs/fakeApi/@types';
import { pagesPath } from '@/libs/path/$path';

import { useCreateAuthor } from '../hooks/useCreateAuthor';
import { useDeleteAuthor } from '../hooks/useDeleteAuthor';
import { useReadAuthors } from '../hooks/useReadAuthors';

export const AuthorListPage = () => {
  const router = useRouter();
  const { data, isPending, isError } = useReadAuthors();
  const { mutate: createMutate } = useCreateAuthor();
  const { mutate: deleteMutate } = useDeleteAuthor();

  const createAuthorData: Author = {
    id: 9999,
    firstName: 'create-first-name',
    lastName: 'create-last-name',
  };

  const handleClick = (id: number) => {
    router.push(pagesPath.authors._id(id).$url().path);
  };

  if (isError) return <div>Error</div>;
  if (isPending) return <div>Loading</div>;

  return (
    <>
      <h1 className="text-lg font-semibold">AuthorListPage</h1>
      <div>
        <NaBaseButton color="success" size="small" onClick={() => createMutate(createAuthorData)}>
          Create
        </NaBaseButton>
      </div>
      <main>
        {data.body.map((author) => (
          <div key={author.id} className="p-1">
            <span className="mr-2">
              <Link href={pagesPath.authors._id(author.id).$url().path} className="underline">
                Id: {author.id}
              </Link>{' '}
              FirstName: {author.firstName} LastName: {author.lastName}
            </span>
            <span className="mr-1">
              <NaBaseButton color="default" size="small" onClick={() => handleClick(author.id)}>
                Detail
              </NaBaseButton>
            </span>
            <span className="mr-1">
              <NaBaseButton color="danger" size="small" onClick={() => deleteMutate(author.id)}>
                Delete
              </NaBaseButton>
            </span>
          </div>
        ))}
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url().path)}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

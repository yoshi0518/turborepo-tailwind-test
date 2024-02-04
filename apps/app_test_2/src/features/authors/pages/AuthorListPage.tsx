import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { Author } from '@/libs/fakeApi/@types';
import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadAuthors } from '../hooks/useReadAuthors';

export const AuthorListPage = ({ fallbackData }: { fallbackData: Author[] }) => {
  const title = `AuthorList | ${appTitle}`;
  const router = useRouter();
  const { authors, error, isLoading, update } = useReadAuthors(fallbackData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">AuthorListPage</h1>
      <main>
        <NaBaseButton color="info" onClick={update}>
          Mutate
        </NaBaseButton>
        {authors.map((author, index) => (
          <div key={index} className="mt-2">
            <div>
              ID：
              <Link href={pagesPath.authors._id(author.id).$url()} className="text-blue-500">
                {author.id}
              </Link>
            </div>
            <div>IdBook：{author.idBook}</div>
            <div>FirstName：{author.firstName}</div>
            <div>LastName：{author.lastName}</div>
          </div>
        ))}
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.$url())}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

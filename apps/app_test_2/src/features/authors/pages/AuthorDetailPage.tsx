import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import type { Author } from '@/libs/fakeApi/@types';
import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadAuthor } from '../hooks/useReadAuthor';

export const AuthorDetailPage = ({ id, fallbackData }: { id: number; fallbackData: Author }) => {
  const title = `AuthorDetail:${id} | ${appTitle}`;
  const router = useRouter();
  const { author, error, isLoading, update } = useReadAuthor(id, fallbackData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">AuthorDetailPage</h1>
      <main>
        <NaBaseButton color="info" onClick={update}>
          Mutate
        </NaBaseButton>
        <div className="mt-2">
          <div>ID：{author.id}</div>
          <div>IdBook：{author.idBook}</div>
          <div>FirstName：{author.firstName}</div>
          <div>LastName：{author.lastName}</div>
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.authors.$url())}>
          一覧へ移動
        </NaBaseButton>
      </div>
    </>
  );
};

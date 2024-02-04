import Head from 'next/head';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadPost } from '../hooks/useReadPost';

import type { PostType } from '../types';

export const PostDetailPage = ({ id, fallbackData }: { id: string; fallbackData: PostType }) => {
  const title = `PostDetail:${id} | ${appTitle}`;
  const router = useRouter();
  const { post, error, isLoading, update } = useReadPost(id, fallbackData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">PostDetailPage</h1>
      <main>
        <NaBaseButton color="info" onClick={update}>
          Mutate
        </NaBaseButton>
        <div className="mt-2">
          <div>ID：{post.id}</div>
          <div>UserID：{post.userId}</div>
          <div>Title：{post.title}</div>
          <div>Body：{post.body}</div>
        </div>
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push(pagesPath.posts.$url())}>
          一覧へ移動
        </NaBaseButton>
      </div>
    </>
  );
};

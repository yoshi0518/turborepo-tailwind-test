import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { pagesPath } from '@/libs/path/$path';

import { appTitle } from '@/config';

import { useReadPosts } from '../hooks/useReadPosts';

import type { PostType } from '../types';

export const PostListPage = ({ fallbackData }: { fallbackData: PostType[] }) => {
  const title = `PostList | ${appTitle}`;
  const router = useRouter();
  const { posts, error, isLoading, update } = useReadPosts(fallbackData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">PostListPage</h1>
      <main>
        <NaBaseButton color="info" onClick={update}>
          Mutate
        </NaBaseButton>
        {posts.map((post, index) => (
          <div key={index} className="mt-2">
            <div>ID：{post.id}</div>
            <div>UserID：{post.userId}</div>
            <div>
              Title：
              <Link href={pagesPath.posts._id(post.id).$url()} className="text-blue-500">
                {post.title}
              </Link>
            </div>
            <div>Body：{post.body}</div>
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

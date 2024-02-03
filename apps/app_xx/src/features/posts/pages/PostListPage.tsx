import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NaBaseButton } from '@/components/NaBaseButton';

import { appTitle } from '@/config';

import { useReadPosts } from '../hooks/useReadPosts';

import type { PostType } from '../types';

export const PostListPage = ({ fallbackData }: { fallbackData: PostType[] }) => {
  const title = `PostList | ${appTitle}`;
  const router = useRouter();
  const { posts, errorPosts, isLoadingPosts, mutatePosts } = useReadPosts(fallbackData);

  if (errorPosts) return <div>failed to load</div>;
  if (isLoadingPosts) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <h1 className="text-lg font-semibold">PostListPage</h1>
      <main>
        <NaBaseButton color="info" onClick={mutatePosts}>
          Mutate
        </NaBaseButton>
        {posts.map((post, index) => (
          <div key={index} className="mt-2">
            <div>ID：{post.id}</div>
            <div>UserID：{post.userId}</div>
            <div>
              Title：
              <Link href={`/posts/${post.id}`} className="text-blue-500">
                {post.title}
              </Link>
            </div>
            <div>Body：{post.body}</div>
          </div>
        ))}
      </main>
      <div className="mt-4">
        <NaBaseButton variant="outline" onClick={() => router.push('/')}>
          HomePageへ移動
        </NaBaseButton>
      </div>
    </>
  );
};

import { PostType } from '@/features/posts/types';

export type Methods = {
  get: {
    status: 200;
    resBody: PostType[];
  };

  post: {
    status: 200;
    reqBody: PostType;
  };
};

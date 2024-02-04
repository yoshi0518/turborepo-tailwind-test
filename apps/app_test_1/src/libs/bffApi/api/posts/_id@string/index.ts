import { PostType } from '@/features/posts/types';

export type Methods = {
  get: {
    status: 200;
    resBody: PostType;
  };

  put: {
    status: 200;
    reqBody: PostType;
  };

  delete: {
    status: 200;
  };
};

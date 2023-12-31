import type { Author } from '@/libs/fakeApi/@types';

export type Methods = {
  get: {
    status: 200;
    resBody: Author[];
  };

  post: {
    status: 200;
    reqBody: Author;
  };
};

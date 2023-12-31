import type { User } from '@/libs/fakeApi/@types';

export type Methods = {
  get: {
    status: 200;
    resBody: User[];
  };

  post: {
    status: 200;
    reqBody: User;
  };
};

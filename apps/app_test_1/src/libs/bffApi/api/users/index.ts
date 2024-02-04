import type { UserType } from '@/features/users/types';

export type Methods = {
  get: {
    status: 200;
    resBody: UserType[];
  };

  post: {
    status: 200;
    reqBody: UserType;
  };
};

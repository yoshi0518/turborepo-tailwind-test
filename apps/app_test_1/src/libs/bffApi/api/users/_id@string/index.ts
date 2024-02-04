import type { UserType } from '@/features/users/types';

export type Methods = {
  get: {
    status: 200;
    resBody: UserType;
  };

  put: {
    status: 200;
    reqBody: UserType;
  };

  delete: {
    status: 200;
  };
};

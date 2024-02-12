import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_80a9vt } from './api/users';
import type { Methods as Methods_1c2t62n } from './api/users/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/users';
  const GET = 'GET';

  return {
    api: {
      users: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1c2t62n['get']['resBody'], BasicHeaders, Methods_1c2t62n['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1c2t62n['get']['resBody'], BasicHeaders, Methods_1c2t62n['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

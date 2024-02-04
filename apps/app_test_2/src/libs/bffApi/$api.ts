import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_a353t9 } from './api/authors';
import type { Methods as Methods_qwi10v } from './api/authors/_id@number';
import type { Methods as Methods_80a9vt } from './api/users';
import type { Methods as Methods_15qia57 } from './api/users/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/authors';
  const PATH1 = '/api/users';
  const GET = 'GET';

  return {
    api: {
      authors: {
        _id: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qwi10v['get']['resBody'], BasicHeaders, Methods_qwi10v['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_qwi10v['get']['resBody'], BasicHeaders, Methods_qwi10v['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_a353t9['get']['resBody'], BasicHeaders, Methods_a353t9['get']['status']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_a353t9['get']['resBody'], BasicHeaders, Methods_a353t9['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      users: {
        _id: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_15qia57['get']['resBody'], BasicHeaders, Methods_15qia57['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_15qia57['get']['resBody'], BasicHeaders, Methods_15qia57['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

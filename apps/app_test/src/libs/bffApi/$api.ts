import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1p5xa2x } from './api/v1/authors';
import type { Methods as Methods_jfy6fv } from './api/v1/authors/_id@number';
import type { Methods as Methods_r5qu0t } from './api/v1/users';
import type { Methods as Methods_zt0hwf } from './api/v1/users/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/authors';
  const PATH1 = '/api/v1/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    api: {
      v1: {
        authors: {
          _id: (val3: number) => {
            const prefix3 = `${PATH0}/${val3}`;

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_jfy6fv['get']['resBody'], BasicHeaders, Methods_jfy6fv['get']['status']>(prefix, prefix3, GET, option).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_jfy6fv['get']['resBody'], BasicHeaders, Methods_jfy6fv['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              put: (option: { body: Methods_jfy6fv['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_jfy6fv['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods_jfy6fv['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_jfy6fv['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_jfy6fv['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_jfy6fv['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1p5xa2x['get']['resBody'], BasicHeaders, Methods_1p5xa2x['get']['status']>(prefix, PATH0, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1p5xa2x['get']['resBody'], BasicHeaders, Methods_1p5xa2x['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          post: (option: { body: Methods_1p5xa2x['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1p5xa2x['post']['status']>(prefix, PATH0, POST, option).send(),
          $post: (option: { body: Methods_1p5xa2x['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_1p5xa2x['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH0}`,
        },
        users: {
          _id: (val3: number) => {
            const prefix3 = `${PATH1}/${val3}`;

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_zt0hwf['get']['resBody'], BasicHeaders, Methods_zt0hwf['get']['status']>(prefix, prefix3, GET, option).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_zt0hwf['get']['resBody'], BasicHeaders, Methods_zt0hwf['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              put: (option: { body: Methods_zt0hwf['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_zt0hwf['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods_zt0hwf['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_zt0hwf['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_zt0hwf['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_zt0hwf['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_r5qu0t['get']['resBody'], BasicHeaders, Methods_r5qu0t['get']['status']>(prefix, PATH1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_r5qu0t['get']['resBody'], BasicHeaders, Methods_r5qu0t['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          post: (option: { body: Methods_r5qu0t['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_r5qu0t['post']['status']>(prefix, PATH1, POST, option).send(),
          $post: (option: { body: Methods_r5qu0t['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_r5qu0t['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH1}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

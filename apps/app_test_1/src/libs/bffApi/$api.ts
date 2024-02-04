import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_i50vr6 } from './api/posts';
import type { Methods as Methods_1s4dmdm } from './api/posts/_id@string';
import type { Methods as Methods_80a9vt } from './api/users';
import type { Methods as Methods_1c2t62n } from './api/users/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/posts';
  const PATH1 = '/api/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    api: {
      posts: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1s4dmdm['get']['resBody'], BasicHeaders, Methods_1s4dmdm['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1s4dmdm['get']['resBody'], BasicHeaders, Methods_1s4dmdm['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods_1s4dmdm['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1s4dmdm['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods_1s4dmdm['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1s4dmdm['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1s4dmdm['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1s4dmdm['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_i50vr6['get']['resBody'], BasicHeaders, Methods_i50vr6['get']['status']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_i50vr6['get']['resBody'], BasicHeaders, Methods_i50vr6['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods_i50vr6['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_i50vr6['post']['status']>(prefix, PATH0, POST, option).send(),
        $post: (option: { body: Methods_i50vr6['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_i50vr6['post']['status']>(prefix, PATH0, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      users: {
        _id: (val2: string) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1c2t62n['get']['resBody'], BasicHeaders, Methods_1c2t62n['get']['status']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1c2t62n['get']['resBody'], BasicHeaders, Methods_1c2t62n['get']['status']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods_1c2t62n['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1c2t62n['put']['status']>(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods_1c2t62n['put']['reqBody'], config?: T | undefined }) =>
              fetch<void, BasicHeaders, Methods_1c2t62n['put']['status']>(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1c2t62n['delete']['status']>(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch<void, BasicHeaders, Methods_1c2t62n['delete']['status']>(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_80a9vt['get']['resBody'], BasicHeaders, Methods_80a9vt['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
        post: (option: { body: Methods_80a9vt['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_80a9vt['post']['status']>(prefix, PATH1, POST, option).send(),
        $post: (option: { body: Methods_80a9vt['post']['reqBody'], config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods_80a9vt['post']['status']>(prefix, PATH1, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH1}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

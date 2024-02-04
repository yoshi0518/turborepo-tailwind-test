import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1a2wr86 } from './api/v1/Activities';
import type { Methods as Methods_1w60l3m } from './api/v1/Activities/_id@number';
import type { Methods as Methods_rhkq95 } from './api/v1/Authors';
import type { Methods as Methods_jcy81n } from './api/v1/Authors/_id@number';
import type { Methods as Methods_u66uca } from './api/v1/Authors/authors/books/_idBook@number';
import type { Methods as Methods_uon7jv } from './api/v1/Books';
import type { Methods as Methods_25p1dx } from './api/v1/Books/_id@number';
import type { Methods as Methods_un6193 } from './api/v1/CoverPhotos';
import type { Methods as Methods_6hhl7l } from './api/v1/CoverPhotos/_id@number';
import type { Methods as Methods_oez6qe } from './api/v1/CoverPhotos/books/covers/_idBook@number';
import type { Methods as Methods_2432u5 } from './api/v1/Users';
import type { Methods as Methods_ih8f27 } from './api/v1/Users/_id@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/v1/Activities';
  const PATH1 = '/api/v1/Authors';
  const PATH2 = '/api/v1/Authors/authors/books';
  const PATH3 = '/api/v1/Books';
  const PATH4 = '/api/v1/CoverPhotos';
  const PATH5 = '/api/v1/CoverPhotos/books/covers';
  const PATH6 = '/api/v1/Users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    api: {
      v1: {
        Activities: {
          _id: (val3: number) => {
            const prefix3 = `${PATH0}/${val3}`;

            return {
              /**
               * @returns Success
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1w60l3m['get']['resBody'], BasicHeaders, Methods_1w60l3m['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Success
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1w60l3m['get']['resBody'], BasicHeaders, Methods_1w60l3m['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns Success
               */
              put: (option: { body: Methods_1w60l3m['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1w60l3m['put']['resBody'], BasicHeaders, Methods_1w60l3m['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Success
               */
              $put: (option: { body: Methods_1w60l3m['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_1w60l3m['put']['resBody'], BasicHeaders, Methods_1w60l3m['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1w60l3m['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_1w60l3m['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1a2wr86['get']['resBody'], BasicHeaders, Methods_1a2wr86['get']['status']>(prefix, PATH0, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1a2wr86['get']['resBody'], BasicHeaders, Methods_1a2wr86['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          post: (option: { body: Methods_1a2wr86['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1a2wr86['post']['resBody'], BasicHeaders, Methods_1a2wr86['post']['status']>(prefix, PATH0, POST, option).json(),
          /**
           * @returns Success
           */
          $post: (option: { body: Methods_1a2wr86['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_1a2wr86['post']['resBody'], BasicHeaders, Methods_1a2wr86['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`,
        },
        Authors: {
          _id: (val3: number) => {
            const prefix3 = `${PATH1}/${val3}`;

            return {
              /**
               * @returns Success
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_jcy81n['get']['resBody'], BasicHeaders, Methods_jcy81n['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Success
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_jcy81n['get']['resBody'], BasicHeaders, Methods_jcy81n['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns Success
               */
              put: (option: { body: Methods_jcy81n['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_jcy81n['put']['resBody'], BasicHeaders, Methods_jcy81n['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Success
               */
              $put: (option: { body: Methods_jcy81n['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_jcy81n['put']['resBody'], BasicHeaders, Methods_jcy81n['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_jcy81n['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_jcy81n['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          authors: {
            books: {
              _idBook: (val5: number) => {
                const prefix5 = `${PATH2}/${val5}`;

                return {
                  /**
                   * @returns Success
                   */
                  get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_u66uca['get']['resBody'], BasicHeaders, Methods_u66uca['get']['status']>(prefix, prefix5, GET, option).json(),
                  /**
                   * @returns Success
                   */
                  $get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_u66uca['get']['resBody'], BasicHeaders, Methods_u66uca['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix5}`,
                };
              },
            },
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_rhkq95['get']['resBody'], BasicHeaders, Methods_rhkq95['get']['status']>(prefix, PATH1, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_rhkq95['get']['resBody'], BasicHeaders, Methods_rhkq95['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          post: (option: { body: Methods_rhkq95['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_rhkq95['post']['resBody'], BasicHeaders, Methods_rhkq95['post']['status']>(prefix, PATH1, POST, option).json(),
          /**
           * @returns Success
           */
          $post: (option: { body: Methods_rhkq95['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_rhkq95['post']['resBody'], BasicHeaders, Methods_rhkq95['post']['status']>(prefix, PATH1, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`,
        },
        Books: {
          _id: (val3: number) => {
            const prefix3 = `${PATH3}/${val3}`;

            return {
              /**
               * @returns Success
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_25p1dx['get']['resBody'], BasicHeaders, Methods_25p1dx['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Success
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_25p1dx['get']['resBody'], BasicHeaders, Methods_25p1dx['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              put: (option: { body: Methods_25p1dx['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_25p1dx['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods_25p1dx['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_25p1dx['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_25p1dx['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_25p1dx['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uon7jv['get']['resBody'], BasicHeaders, Methods_uon7jv['get']['status']>(prefix, PATH3, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_uon7jv['get']['resBody'], BasicHeaders, Methods_uon7jv['get']['status']>(prefix, PATH3, GET, option).json().then(r => r.body),
          post: (option: { body: Methods_uon7jv['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_uon7jv['post']['status']>(prefix, PATH3, POST, option).send(),
          $post: (option: { body: Methods_uon7jv['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_uon7jv['post']['status']>(prefix, PATH3, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH3}`,
        },
        CoverPhotos: {
          _id: (val3: number) => {
            const prefix3 = `${PATH4}/${val3}`;

            return {
              /**
               * @returns Success
               */
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_6hhl7l['get']['resBody'], BasicHeaders, Methods_6hhl7l['get']['status']>(prefix, prefix3, GET, option).json(),
              /**
               * @returns Success
               */
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_6hhl7l['get']['resBody'], BasicHeaders, Methods_6hhl7l['get']['status']>(prefix, prefix3, GET, option).json().then(r => r.body),
              /**
               * @returns Success
               */
              put: (option: { body: Methods_6hhl7l['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_6hhl7l['put']['resBody'], BasicHeaders, Methods_6hhl7l['put']['status']>(prefix, prefix3, PUT, option).json(),
              /**
               * @returns Success
               */
              $put: (option: { body: Methods_6hhl7l['put']['reqBody'], config?: T | undefined }) =>
                fetch<Methods_6hhl7l['put']['resBody'], BasicHeaders, Methods_6hhl7l['put']['status']>(prefix, prefix3, PUT, option).json().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_6hhl7l['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_6hhl7l['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          books: {
            covers: {
              _idBook: (val5: number) => {
                const prefix5 = `${PATH5}/${val5}`;

                return {
                  /**
                   * @returns Success
                   */
                  get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_oez6qe['get']['resBody'], BasicHeaders, Methods_oez6qe['get']['status']>(prefix, prefix5, GET, option).json(),
                  /**
                   * @returns Success
                   */
                  $get: (option?: { config?: T | undefined } | undefined) =>
                    fetch<Methods_oez6qe['get']['resBody'], BasicHeaders, Methods_oez6qe['get']['status']>(prefix, prefix5, GET, option).json().then(r => r.body),
                  $path: () => `${prefix}${prefix5}`,
                };
              },
            },
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_un6193['get']['resBody'], BasicHeaders, Methods_un6193['get']['status']>(prefix, PATH4, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_un6193['get']['resBody'], BasicHeaders, Methods_un6193['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
          /**
           * @returns Success
           */
          post: (option: { body: Methods_un6193['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_un6193['post']['resBody'], BasicHeaders, Methods_un6193['post']['status']>(prefix, PATH4, POST, option).json(),
          /**
           * @returns Success
           */
          $post: (option: { body: Methods_un6193['post']['reqBody'], config?: T | undefined }) =>
            fetch<Methods_un6193['post']['resBody'], BasicHeaders, Methods_un6193['post']['status']>(prefix, PATH4, POST, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH4}`,
        },
        Users: {
          _id: (val3: number) => {
            const prefix3 = `${PATH6}/${val3}`;

            return {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_ih8f27['get']['status']>(prefix, prefix3, GET, option).send(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_ih8f27['get']['status']>(prefix, prefix3, GET, option).send().then(r => r.body),
              put: (option: { body: Methods_ih8f27['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_ih8f27['put']['status']>(prefix, prefix3, PUT, option).send(),
              $put: (option: { body: Methods_ih8f27['put']['reqBody'], config?: T | undefined }) =>
                fetch<void, BasicHeaders, Methods_ih8f27['put']['status']>(prefix, prefix3, PUT, option).send().then(r => r.body),
              delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_ih8f27['delete']['status']>(prefix, prefix3, DELETE, option).send(),
              $delete: (option?: { config?: T | undefined } | undefined) =>
                fetch<void, BasicHeaders, Methods_ih8f27['delete']['status']>(prefix, prefix3, DELETE, option).send().then(r => r.body),
              $path: () => `${prefix}${prefix3}`,
            };
          },
          /**
           * @returns Success
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2432u5['get']['resBody'], BasicHeaders, Methods_2432u5['get']['status']>(prefix, PATH6, GET, option).json(),
          /**
           * @returns Success
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_2432u5['get']['resBody'], BasicHeaders, Methods_2432u5['get']['status']>(prefix, PATH6, GET, option).json().then(r => r.body),
          post: (option: { body: Methods_2432u5['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_2432u5['post']['status']>(prefix, PATH6, POST, option).send(),
          $post: (option: { body: Methods_2432u5['post']['reqBody'], config?: T | undefined }) =>
            fetch<void, BasicHeaders, Methods_2432u5['post']['status']>(prefix, PATH6, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;

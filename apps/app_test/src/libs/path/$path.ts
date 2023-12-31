const buildSuffix = (url?: { query?: Record<string, string>; hash?: string }) => {
  const query = url?.query;
  const hash = url?.hash;
  if (!query && !hash) return '';
  const search = query ? `?${new URLSearchParams(query)}` : '';
  return `${search}${hash ? `#${hash}` : ''}`;
};

export const pagesPath = {
  authors: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/authors/[id]' as const,
        query: { id },
        hash: url?.hash,
        path: `/authors/${id}${buildSuffix(url)}`,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: '/authors' as const,
      hash: url?.hash,
      path: `/authors${buildSuffix(url)}`,
    }),
  },
  env: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/env' as const,
      hash: url?.hash,
      path: `/env${buildSuffix(url)}`,
    }),
  },
  form: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/form' as const,
      hash: url?.hash,
      path: `/form${buildSuffix(url)}`,
    }),
  },
  i18n: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/i18n' as const,
      hash: url?.hash,
      path: `/i18n${buildSuffix(url)}`,
    }),
  },
  local_storage: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/local-storage' as const,
      hash: url?.hash,
      path: `/local-storage${buildSuffix(url)}`,
    }),
  },
  ui: {
    $url: (url?: { hash?: string }) => ({ pathname: '/ui' as const, hash: url?.hash, path: `/ui${buildSuffix(url)}` }),
  },
  users: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/users/[id]' as const,
        query: { id },
        hash: url?.hash,
        path: `/users/${id}${buildSuffix(url)}`,
      }),
    }),
    $url: (url?: { hash?: string }) => ({
      pathname: '/users' as const,
      hash: url?.hash,
      path: `/users${buildSuffix(url)}`,
    }),
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash, path: `/${buildSuffix(url)}` }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  icon_192x192_png: '/icon-192x192.png',
  icon_256x256_png: '/icon-256x256.png',
  icon_384x384_png: '/icon-384x384.png',
  icon_512x512_png: '/icon-512x512.png',
  main_js: '/main.js',
  manifest_json: '/manifest.json',
  robots_txt: '/robots.txt',
  sw_js: '/sw.js',
} as const;

export type StaticPath = typeof staticPath;

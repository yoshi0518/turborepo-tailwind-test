export const pagesPath = {
  env: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/env' as const, hash: url?.hash }),
  },
  form: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/form' as const, hash: url?.hash }),
  },
  i18n: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/i18n' as const, hash: url?.hash }),
  },
  local_storage: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({
      pathname: '/local-storage' as const,
      hash: url?.hash,
    }),
  },
  router: {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string | undefined } | undefined) => ({
        pathname: '/router/[id]' as const,
        query: { id },
        hash: url?.hash,
      }),
    }),
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/router' as const, hash: url?.hash }),
  },
  ui: {
    $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/ui' as const, hash: url?.hash }),
  },
  $url: (url?: { hash?: string | undefined } | undefined) => ({ pathname: '/' as const, hash: url?.hash }),
};

export type PagesPath = typeof pagesPath;

export const staticPath = {
  favicon_ico: '/favicon.ico',
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

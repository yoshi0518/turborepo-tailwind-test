import type { NextRequest } from 'next/server';

// export const middleware = (request: NextRequest) => NextResponse.redirect(new URL('/ui', request.url));
export const middleware = (request: NextRequest) => {
  console.log('=== middleware ===');
  console.log({
    url: request.url,
    method: request.method,
  });
  // console.log({ request });
};

export const config = {
  matcher: [
    /*
     * Middleware対象外のURLを指定
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icon-.*.png
     * - main.js
     * - manifest.json
     * - robots.txt
     * - sw.js
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon-.*.png|main.js|manifest.json|robots.txt|sw.js).*)',
  ],
};

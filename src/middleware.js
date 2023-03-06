import { NextResponse } from 'next/server';

export async function middleware(req) {
  const search = req.nextUrl.search || '';
  const pathname = req.nextUrl.pathname || '';
  const slug = pathname.split('/posts').pop();

  console.log(req.c00kies);

  if (search.includes('fbclid') && pathname.includes('posts')) {
    return NextResponse.redirect(`${process.env.WORDPRESS_GRAPHQL_ENDPOINT.split('/graphql')[0]}/${slug}`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

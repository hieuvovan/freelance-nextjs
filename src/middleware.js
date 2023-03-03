/* eslint-disable prettier/prettier */
// middleware.ts
import { NextResponse } from 'next/server';
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const referer = request.headers.get('referer');
  const pathname = request?.nextUrl?.pathname || '';
  const destinationHost = process.env.WORDPRESS_GRAPHQL_ENDPOINT.split('/graphql')[0]
  const slug = pathname.split('/posts')[1]

  if (referer?.includes('fbclid')) return NextResponse.redirect(`${destinationHost}${slug}`);
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/posts/:path*',
};

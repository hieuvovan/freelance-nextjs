import { NextResponse } from 'next/server';

export async function middleware(req) {
  const search = req.nextUrl.search || '';
  const pathname = req.nextUrl.pathname || '';
  const slug = pathname.split('/posts').pop();
  // const res = NextResponse.next();

  if (search.includes('fbclid') && pathname.includes('posts')) {
    return NextResponse.redirect(`${process.env.WORDPRESS_GRAPHQL_ENDPOINT.split('/graphql')[0]}/${slug}`);
  }

  return NextResponse.next();
}

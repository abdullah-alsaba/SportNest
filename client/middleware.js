import { NextResponse } from 'next/server'

const privateRoutes = [
  '/my-bookings',
  '/add-facility',
  '/manage-facilities',
  '/dashboard',
]

export function middleware(request) {
  const { pathname } = request.nextUrl
  const isPrivate = privateRoutes.some((route) => pathname.startsWith(route))
  const token = request.cookies.get('token')?.value

  if (isPrivate && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/my-bookings/:path*',
    '/add-facility/:path*',
    '/manage-facilities/:path*',
    '/dashboard/:path*',
  ],
}

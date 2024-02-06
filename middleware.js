import { NextResponse } from "next/server";

export function middleware(req) {
  const {pathname} = req.nextUrl
  const cookies = !!req.cookies.get('token')
  const isLoginPage = pathname.startsWith('/login')

  if (!cookies && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (cookies && isLoginPage) {
    return NextResponse.redirect(new URL('/', req.url))
  }

}
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}
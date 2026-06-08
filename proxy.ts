import { NextResponse, type NextRequest } from "next/server";
import { verifySessionCookie, COOKIE_NAME } from "@/lib/admin-session";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow the login page through
  if (pathname === "/admin/login") return NextResponse.next();

  const cookieValue = request.cookies.get(COOKIE_NAME)?.value;

  if (!cookieValue) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  const valid = await verifySessionCookie(cookieValue);
  if (!valid) {
    const res = NextResponse.redirect(new URL("/admin/login", request.url));
    res.cookies.delete(COOKIE_NAME);
    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

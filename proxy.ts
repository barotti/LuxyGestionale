import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_PATHS = ["/register", "/license/success"];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLoginPage = pathname === "/login";

  // Rotte sempre accessibili senza login
  if (
    PUBLIC_PATHS.includes(pathname) ||
    pathname.startsWith("/api/stripe") ||
    pathname.startsWith("/api/register")
  ) {
    return NextResponse.next();
  }

  // NextAuth v5 usa questi cookie per la sessione JWT
  const sessionToken =
    request.cookies.get("authjs.session-token") ??
    request.cookies.get("__Secure-authjs.session-token");

  const isLoggedIn = !!sessionToken;

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/properties", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

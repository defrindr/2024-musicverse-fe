import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import App from "./config/app";
// import { checkAccessFeature } from "./utils/internal/sioma";

export function middleware(request: NextRequest) {
  //setup var
  const { pathname } = request.nextUrl;
  const prefix = String(pathname).split("/")[1];

  const userToken = request.cookies.get(App.Cookie.Auth.Token)?.value;
  const userExpiredAt = parseInt(
    request.cookies.get(App.Cookie.Auth.ExpiredAt)?.value ?? "0"
  );
  const redirectTo =
    request.cookies.get(App.Cookie.Auth.RedirectTo)?.value ?? "/";
  const userAuthed = JSON.parse(
    request.cookies.get(App.Cookie.Auth.User)?.value ??
      JSON.stringify({ role: "" })
  );
  function logout() {
    request.cookies.delete(App.Cookie.Auth.User);
    request.cookies.delete(App.Cookie.Auth.Token);
    request.cookies.delete(App.Cookie.Auth.RedirectTo);
    request.cookies.delete(App.Cookie.Auth.ExpiredAt);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  function abort() {
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  if (
    ["admin", "talent", "producer"].includes(prefix) ||
    ["/auth/user-type"].includes(pathname)
  ) {
    if (!userToken) {
      return logout();
    }

    if (Math.floor(Date.now() / 1000) > userExpiredAt) {
      return logout();
    }

    if (prefix == "admin") {
      if (userAuthed.role != "ADMINISTRATOR") {
        return abort();
      }
    } else if (prefix == "producer") {
      if (userAuthed.role != "PRODUCER") {
        return abort();
      }
    } else if (prefix == "talent") {
      if (userAuthed.role != "TALENT") {
        return abort();
      }
    } else if (prefix == "auth") {
      if (userAuthed.role != "REGISTER") {
        return abort();
      }
    }
  } else if (["/auth/login", "/auth/signin"].includes(pathname)) {
    console.log(userToken)
    if (userToken) {
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }
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
    "/((?!api|_next/static|_next/image|images|public|favicon.ico).*)",
  ],
};

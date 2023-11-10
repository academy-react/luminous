import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { auth } from "@/lib/auth";

import { type MiddlewareFactory } from "./chain";

export const withAuthNMiddleware: MiddlewareFactory = (nextMiddleware) => {
  return async (req: NextRequest, _next: NextFetchEvent) => {
    const session = await auth();

    const pathnameLocale = req.nextUrl.pathname.split("/")[1];
    const pathnameWithoutLocale = req.nextUrl.pathname.replace(
      `/${pathnameLocale}`,
      ""
    );

    const isLoggedIn = !!session?.user;

    const isAuthPage =
      pathnameWithoutLocale.startsWith("/sign-in") ||
      pathnameWithoutLocale.startsWith("/sign-up") ||
      pathnameWithoutLocale.startsWith("/reset-password");

    const isDashboardPage = pathnameWithoutLocale.startsWith("/dashboard");

    if (isAuthPage && isLoggedIn) {
      return NextResponse.redirect(new URL(`/${pathnameLocale}`, req.url));
    }

    if (isDashboardPage && !isLoggedIn) {
      return NextResponse.redirect(
        new URL(`/${pathnameLocale}/sign-in`, req.url)
      );
    }

    return nextMiddleware(req, _next);
  };
};

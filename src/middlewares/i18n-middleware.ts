import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "#/i18n.config";

import { type MiddlewareFactory } from "./chain";

const getLocale = (req: NextRequest) => {
  const negotiatorHeaders: Record<string, string> = {};
  req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales: string[] = [...i18n.locales];
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
};

export const withI18NMiddleware: MiddlewareFactory = (nextMiddleware) => {
  return (req: NextRequest, _next: NextFetchEvent) => {
    // Check if there is any supported locale in the pathname.
    const { pathname } = req.nextUrl;

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // If the pathname is missing a locale,
    // redirect to the same path with the default locale.
    if (pathnameIsMissingLocale) {
      const locale = getLocale(req);

      return NextResponse.redirect(
        new URL(
          `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          req.url
        )
      );
    }

    return nextMiddleware(req, _next);
  };
};

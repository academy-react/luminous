import Link from "next/link";

import { cn } from "@/lib/utils";
import { headerMenuOptions } from "@/dict/lobby/header.dict";

import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

export const MainNav = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="flex items-center gap-7">
      <Link aria-label="Home" href={`/${lang}`}>
        <Icons.logo className="h-10 w-10 fill-purple-primary transition-all duration-500 hover:fill-purple-secondary" />
      </Link>
      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex gap-6 lg:gap-10">
          {headerMenuOptions.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${lang}/${item.href}`}
                className={cn(
                  "text-lg font-extrabold text-purple-text decoration-1 underline-offset-[12px] transition-all duration-500 hover:text-purple-secondary",
                  lang === "en" ? "capitalize" : ""
                )}
              >
                {item.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export const AuthNav = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="flex flex-1 items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn p-1.5 text-purple-text transition duration-500 hover:bg-white">
          <Icons.search />
        </div>
        <div className="flex h-full gap-2 font-semibold">
          <Link
            href={`/${lang}/sign-up`}
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn px-7 py-1.5 text-center text-purple-text transition duration-500 hover:bg-white"
          >
            {{ fa: "ثبت‌نام", en: "Sign Up" }[lang]}
          </Link>
          <Link
            href={`/${lang}/sign-in`}
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn px-7 py-1.5 text-center text-purple-text transition duration-500 hover:bg-white"
          >
            {{ fa: "ورود", en: "Sign In" }[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

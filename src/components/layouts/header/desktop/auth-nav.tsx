"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/elements/ui";

import { logOutAction } from "@/core/actions";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

import { SearchNav } from "../search-nav";

export const AuthNav = ({
  lang,
  token,
}: {
  lang: Locale;
  token: string | undefined;
}) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const res = await logOutAction();

    if (res) {
      router.refresh();
    }
  };

  return (
    <nav className="flex basis-2/5 flex-wrap items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <SearchNav lang={lang} />
        {token ? (
          <Button
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-2 text-center font-semibold text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
            onClick={() => void handleLogOut()}
          >
            خروج
          </Button>
        ) : (
          <div className="flex h-full flex-wrap gap-2 font-semibold">
            <LinkButton
              lang={lang}
              text={{ fa: "ثبت نام", en: "Sign Up" }}
              href="sign-up"
              className="hidden lg:flex"
            />
            <LinkButton
              lang={lang}
              text={{ fa: "ورود", en: "Sign In" }}
              href="sign-in"
              className="flex"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const LinkButton = ({
  lang,
  text,
  href,
  className,
}: {
  lang: Locale;
  text: {
    [key in Locale]: string;
  };
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={`/${lang}/${href}`}
      className={cn(
        "h-full flex-wrap items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-1.5 text-center text-secondary transition duration-500 hover:bg-transparent hover:text-primary",
        className
      )}
    >
      {text[lang]}
    </Link>
  );
};

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/elements/ui";

import { logOut } from "@/lib/actions/log-out.action";

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
    const res = await logOut();

    if (res) {
      router.refresh();
    }
  };

  return (
    <nav className="flex flex-1 items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <SearchNav />
        {token ? (
          <Button
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-2 text-center font-semibold text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
            onClick={() => void handleLogOut()}
          >
            خروج
          </Button>
        ) : (
          <div className="flex h-full gap-2 font-semibold">
            <LinkButton
              lang={lang}
              text={{ fa: "ثبت نام", en: "Sign Up" }}
              href="sign-up"
            />
            <LinkButton
              lang={lang}
              text={{ fa: "ورود", en: "Sign In" }}
              href="sign-in"
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
}: {
  lang: Locale;
  text: {
    [key in Locale]: string;
  };
  href: string;
}) => {
  return (
    <Link
      href={`/${lang}/${href}`}
      className="flex h-full items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-1.5 text-center text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
    >
      {text[lang]}
    </Link>
  );
};

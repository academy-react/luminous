"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { headerMenuOptions } from "@/dict/lobby/header.dict";

import type { Locale } from "#/i18n.config";

const Header = ({ lang }: { lang: Locale }) => {
  const [backgroundOpacity, setBackgroundOpacity] = useState(
    "bg-opacity-50 dark:bg-opacity-50"
  );

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setBackgroundOpacity("bg-opacity-100  dark:bg-opacity-100");
    } else {
      setBackgroundOpacity("bg-opacity-50  dark:bg-opacity-50");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 mx-auto flex h-16 w-full items-center justify-between bg-white px-4 py-3.5 shadow transition-all duration-300 dark:bg-black sm:px-5 lg:h-20 lg:px-10 lg:py-5",
        backgroundOpacity
      )}
    >
      {/* Routes Nav Bar */}
      <nav className="flex h-full items-center gap-4">
        <Link href={`/${lang}`} className="relative aspect-square h-full">
          <Image
            src="/images/logos/logo.svg"
            fill
            alt="website-logo"
            className="object-cover"
          />
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex gap-4 lg:gap-6">
            {headerMenuOptions.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/${lang}/${item.href}`}
                  className={cn(
                    "text-base font-semibold text-purple-text decoration-1 underline-offset-[12px] hover:underline lg:text-lg",
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
      {/* Auth Nav Bar */}
      <nav className="flex h-full">
        {/* Mobile Menu */}
        <button className="h-full rounded-lg text-gray-300 transition-all duration-500 hover:text-black md:hidden">
          <Menu />
        </button>
        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl bg-purple-btn text-purple-text transition hover:bg-white">
            <Search />
          </div>
          <div className="flex h-full gap-2">
            <Link
              href={`/${lang}/sign-up`}
              className="flex h-full items-center justify-center rounded-xl bg-purple-btn px-7 text-center text-purple-text transition hover:bg-white"
            >
              {{ fa: "ثبت‌نام", en: "Sign Up" }[lang]}
            </Link>
            <Link
              href={`/${lang}/sign-in`}
              className="flex h-full items-center justify-center rounded-xl bg-purple-btn px-7 text-center text-purple-text transition hover:bg-white"
            >
              {{ fa: "ورود", en: "Sign In" }[lang]}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

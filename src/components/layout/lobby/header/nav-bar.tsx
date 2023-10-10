import Image from "next/image";
import Link from "next/link";

import { Menu, Search } from "lucide-react";

import { menuOptions } from "@/dict/lobby/header.dict";

import type { Locale } from "#/i18n.config";

const Navbar = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="mx-auto flex h-16 w-full items-center justify-between border border-gray-200 px-4 py-3 sm:px-8 lg:h-20 lg:px-14 lg:py-5">
      {/* Nav Bar */}
      <div className="flex h-full items-center gap-4">
        <div className="relative aspect-square h-full">
          <Image
            src="/images/logos/logo.svg"
            fill
            alt="website-logo"
            className="object-cover"
          />
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex gap-6">
            {menuOptions.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-xl font-semibold text-purple-text decoration-1 underline-offset-[12px] hover:underline lg:text-2xl"
                >
                  {item.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Auth Nav Bar */}
      <div className="flex h-full">
        {/* Mobile Menu */}
        <button className="h-full rounded-lg text-gray-500 transition-all duration-500 hover:text-black md:hidden">
          <Menu />
        </button>
        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl bg-purple-btn text-purple-text transition hover:bg-white">
            <Search />
          </div>
          <div className="flex h-full gap-2 text-xl lg:text-2xl">
            <Link
              href={`/${lang}/sign-up`}
              className="flex h-full items-center justify-center rounded-xl bg-purple-btn px-7 text-purple-text transition hover:bg-white"
            >
              {{ fa: "ثبت‌نام", en: "Sign Up" }[lang]}
            </Link>
            <Link
              href={`/${lang}/sign-in`}
              className="flex h-full items-center justify-center rounded-xl bg-purple-btn px-7 text-purple-text transition hover:bg-white"
            >
              {{ fa: "ورود", en: "Sign In" }[lang]}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

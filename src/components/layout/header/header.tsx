"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { AuthNav, MainNav } from "@/components/layout/header/desktop-nav";
import { MobileNav } from "@/components/layout/header/mobile-nav";

import type { Locale } from "#/i18n.config";

export const Header = ({ lang }: { lang: Locale }) => {
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
        "sticky top-0 z-50 mx-auto flex w-full justify-between bg-white shadow dark:bg-black",
        backgroundOpacity
      )}
    >
      <div className="container flex h-16 items-center">
        <MainNav lang={lang} />
        <AuthNav lang={lang} />
        <MobileNav lang={lang} />
      </div>
    </header>
  );
};

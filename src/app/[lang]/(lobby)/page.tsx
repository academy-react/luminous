"use client";

import { useTheme } from "next-themes";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";

import { cn } from "@/lib/utils";
import { title } from "@/dict/lobby/header.dict";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { theme, setTheme } = useTheme();

  return (
    <main className="flex h-full items-center justify-center gap-2">
      <h1 className={cn(lang === "en" ? "text-sm" : "text-xl", "h-fit")}>
        {title[lang]}
      </h1>
      <div
        className="h-fit cursor-pointer transition-all duration-500 ease-in-out hover:scale-110 hover:text-slate-400 active:scale-90"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <MdLightMode className="block dark:hidden" />
        <MdOutlineDarkMode className="hidden dark:block" />
      </div>
    </main>
  );
};

export default HomePage;

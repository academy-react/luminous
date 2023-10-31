import Link from "next/link";

import { cn } from "@/lib/utils";
import { headerMenuOptions } from "@/dict/lobby/header.dict";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

export const MobileNav = ({ lang }: { lang: Locale }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="h-full rounded-lg text-primary transition-all duration-500 hover:text-accent md:hidden">
          <Icons.menu />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side={lang === "en" ? "left" : "right"}
        className="w-[200px] border-none bg-card"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl">Luminous</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-2 p-3">
          {headerMenuOptions.map((item) => (
            <li key={item.id} className="font-medium">
              <Link href={`/${lang}/${item.href}`} className="">
                {item.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

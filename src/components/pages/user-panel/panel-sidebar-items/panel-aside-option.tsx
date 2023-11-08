"use client";

import { useState } from "react";
import Link from "next/link";

import { panelAsideOption } from "@/dict/pages/user-panel.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const PanelAsideOption = ({ lang }: { lang: Locale }) => {
  const [asideActiveOption, setAsideActiveOption] = useState(0);

  return (
    <>
      {panelAsideOption.map((item, index) => {
        return (
          <li
            key={index}
            className={cn(
              "flex cursor-pointer items-center gap-2 rounded-r-xl px-4 py-2 text-sm font-semibold text-[#555]",
              asideActiveOption === index && "bg-white text-purple-secondary"
            )}
            onClick={() => {
              setAsideActiveOption(index);
            }}
          >
            <item.Icon />
            <Link href="">{item.title[lang]}</Link>
          </li>
        );
      })}
    </>
  );
};

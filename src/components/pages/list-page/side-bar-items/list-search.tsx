"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ListSearch = ({
  className,
  lang,
}: {
  className?: string;
  lang: Locale;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  console.log("1:" + searchQuery);
  return (
    <div className={cn("w-full rounded-xl bg-card p-4 shadow", className)}>
      <input
        className="border-none bg-transparent text-base placeholder-[#444] focus:placeholder-transparent focus:outline-none"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={
          lang === "fa" ? " جستجو بر اساس عنوان..." : "search by title..."
        }
      />
    </div>
  );
};

'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ListSearch = ({
  className,
  lang,
}: {
  className?: string;
  lang: Locale;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("Query", term);
    } else {
      params.delete("Query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className={cn("w-full rounded-xl bg-card p-4 shadow", className)}>
      <input
        type="text"
        className="border-none bg-transparent text-base placeholder:text-[#444] focus:outline-none focus:placeholder:text-transparent"
        placeholder={lang === "fa" ? "جستجو..." : "search..."}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </div>
  );
};


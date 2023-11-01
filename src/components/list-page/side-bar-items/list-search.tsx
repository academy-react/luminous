import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const ListSearch = ({
  className,
  lang,
}: {
  className?: string;
  lang: Locale;
}) => {
  return (
    <div className={cn("w-full rounded-xl p-4 shadow bg-card", className)}>
      <input
        type="text"
        className="border-none text-base placeholder-[#444] focus:placeholder-transparent focus:outline-none bg-transparent"
        placeholder={lang === "fa" ? "جستجو..." : "search..."}
      />
    </div>
  );
};

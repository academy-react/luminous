import { cn } from "@/lib/utils";
import { title } from "@/dict/lobby/header.dict";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className={cn(lang === "en" ? "text-sm" : "text-xl")}>
        {title[lang]}
      </h1>
    </main>
  );
};

export default HomePage;

import { title } from "@/dict/dict";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="font-mono">{title[lang]}</h1>
    </main>
  );
};

export default HomePage;

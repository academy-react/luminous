import { TitleBox } from "@/components/pages/lobby";
import { NewsCard } from "@/components/pages/lobby/news/news-card";

import { articlesDict, newsDict } from "@/dict/dev";
import { newsTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getNewsFilterPages } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

import { NewsletterSection } from "./newsletter-card";

export const NewsSection = async ({ lang }: { lang: Locale }) => {
  const fetchedData = await getNewsFilterPages();

  const news = fetchedData?.news;

  return (
    <section className="container flex w-full flex-col items-center gap-10 px-10">
      <TitleBox
        lang={lang}
        title={newsTitleBoxDict.title}
        desc={newsTitleBoxDict.subtitle}
      />
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        {news && (
          <>
            <NewsCard lang={lang} title={newsDict.title} contents={news} />
            {/* <NewsCard lang={lang} title={articlesDict.title} contents={news} /> */}
          </>
        )}
      </div>
      <NewsletterSection lang={lang} />
    </section>
  );
};

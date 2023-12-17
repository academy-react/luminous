import { TitleBox } from "@/components/pages/lobby";
import { NewsCard } from "@/components/pages/lobby/news/news-card";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";

import { newsDict } from "@/dict/dev";
import { newsTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getNewsFilterPages } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

import { NewsletterSection } from "./newsletter-card";

export const NewsSection = async ({ lang }: { lang: Locale }) => {
  const fetchedData = await getNewsFilterPages();

  const news = fetchedData?.news;

  return (
    <section className="relative mt-20 sm:mt-40">
      <div className="container">
        <TitleBox
          lang={lang}
          title={newsTitleBoxDict.title}
          desc={newsTitleBoxDict.subtitle}
        />
        {!news ? (
          <FetchErrorAnnouncement place={newsTitleBoxDict.title} lang={lang} />
        ) : (
          <div className="flex w-full items-center justify-center gap-10 md:flex-row">
            <NewsCard lang={lang} title={newsDict.title} contents={news} />
          </div>
        )}
      </div>
      <NewsletterSection lang={lang} />
    </section>
  );
};

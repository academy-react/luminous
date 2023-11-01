import { NewsCard } from "@/components/pages/lobby/news/news-card";
import { TitleBox } from "@/components/pages/lobby/title-box";

import { newsTitleBox } from "@/dict/lobby/lobby-title-box.dict";
import { articlesDict, newsDict } from "@/dict/lobby/news.dict";

import { type Locale } from "#/i18n.config";

import { NewsletterSection } from "./newsletter-card";

export const NewsSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="container flex w-full flex-col items-center gap-10 px-10">
      <TitleBox
        lang={lang}
        title={newsTitleBox.title}
        desc={newsTitleBox.subtitle}
      />
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <NewsCard
          lang={lang}
          title={newsDict.title}
          content={newsDict.content}
        />
        <NewsCard
          lang={lang}
          title={articlesDict.title}
          content={articlesDict.content}
        />
      </div>
      <NewsletterSection lang={lang} />
    </section>
  );
};

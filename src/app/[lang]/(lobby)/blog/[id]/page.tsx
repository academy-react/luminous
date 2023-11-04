"use client";

import { SideBar } from "@/components/pages/details-page";
import { LinkSideCard } from "@/components/pages/details-page/side-bar-items";
import { CategoriesSideCard } from "@/components/pages/details-page/side-bar-items/side-card-categories";
import { PostSuggestionSideCard } from "@/components/pages/details-page/side-bar-items/side-card-post-suggestions";

import {
  categoriesDict,
  latestPostsSideCardDict,
  shortLinkSideCardDict,
} from "@/dict/dev/details.dict";

import { type Locale } from "#/i18n.config";

const BlogIDPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  return (
    <main className="container">
      <div className="shadow-light mt-5 rounded-xl bg-card px-3 py-8"></div>
      <section className="mt-5 grid grid-cols-3 items-start gap-5">
        <section className="col-span-2 space-y-5">
          <div className="h-screen rounded-xl bg-card"></div>
        </section>
        <SideBar>
          <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
          <PostSuggestionSideCard
            lang={lang}
            links={latestPostsSideCardDict.links}
          />
          <CategoriesSideCard lang={lang} categories={categoriesDict.links} />
        </SideBar>
      </section>
    </main>
  );
};

export default BlogIDPage;

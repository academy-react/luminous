import { ContentBody, SideBar, UrlBar } from "@/components/pages/details-page";
import {
  CommentSection,
  PostBody,
} from "@/components/pages/details-page/content";
import {
  CategoriesSideCard,
  LinkSideCard,
} from "@/components/pages/details-page/side-bar-items";
import { PostSuggestionSideCard } from "@/components/pages/details-page/side-bar-items/client";

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
      <UrlBar />
      <section className="mt-5 grid grid-cols-3 items-start gap-5">
        <ContentBody>
          <PostBody />
          <CommentSection lang={lang} />
        </ContentBody>
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

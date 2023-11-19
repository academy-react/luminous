import { UrlBar } from "@/components/pages/details-page/comps";
import {
  CommentSection,
  PostBody,
} from "@/components/pages/details-page/comps/content-body";
import {
  CategoriesSideCard,
  LinkSideCard,
} from "@/components/pages/details-page/comps/side-bar-items";
import { PostSuggestionSideCard } from "@/components/pages/details-page/comps/side-bar-items/side-card-post-suggestions";
import { ContentBody, SideBar } from "@/components/pages/details-page/wrappers";

import {
  categoriesDict,
  latestPostsSideCardDict,
  shortLinkSideCardDict,
} from "@/dict/dev/details.dict";

import { type Locale } from "#/i18n.config";

const BlogIDPage = ({
  params: { lang, id: _id },
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

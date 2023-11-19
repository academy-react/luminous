import { CourseInfo, UrlBar } from "@/components/pages/details-page/comps";
import {
  CommentSection,
  PostBody,
} from "@/components/pages/details-page/comps/content-body";
import { LinkSideCard } from "@/components/pages/details-page/comps/side-bar-items";
import { ContentBody, SideBar } from "@/components/pages/details-page/wrappers";

import { shortLinkSideCardDict } from "@/dict/dev/details.dict";

import { type Locale } from "#/i18n.config";

const CoursesIDPage = ({
  params: { lang, id: _id },
}: {
  params: { lang: Locale; id: number };
}) => {
  return (
    <main className="container">
      <UrlBar />
      <CourseInfo />
      <section className="mt-5 grid grid-cols-3 items-start gap-5">
        <ContentBody>
          <PostBody />
          <CommentSection lang={lang} />
        </ContentBody>
        <SideBar variant="sticky">
          <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
        </SideBar>
      </section>
    </main>
  );
};

export default CoursesIDPage;

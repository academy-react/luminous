import { CourseInfo, UrlBar } from "@/components/pages/details-page/comps";
import {
  CommentSection,
  CourseDetailsGrid,
  CourseLessons,
  PostBody,
} from "@/components/pages/details-page/comps/content-body";
import {
  CourseInfoSideCard,
  LinkSideCard,
  TeacherSideCard,
} from "@/components/pages/details-page/comps/side-bar-items";
import {
  ContentBody,
  DetailsSection,
  SideBar,
} from "@/components/pages/details-page/wrappers";

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
      <DetailsSection>
        <ContentBody>
          <CourseDetailsGrid />
          <CourseLessons />
          <PostBody />
          <CommentSection lang={lang} />
        </ContentBody>
        <SideBar variant="sticky">
          <CourseInfoSideCard />
          <TeacherSideCard />
          <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
        </SideBar>
      </DetailsSection>
    </main>
  );
};

export default CoursesIDPage;

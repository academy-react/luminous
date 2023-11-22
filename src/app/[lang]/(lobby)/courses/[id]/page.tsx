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

import { getCourseById } from "@/core/services/api/course";

import { type Locale } from "#/i18n.config";

const CoursesIDPage = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const data = await getCourseById(id);

  return (
    <main className="container">
      {data && (
        <>
          <UrlBar />
          <CourseInfo data={data} />
          <DetailsSection>
            <ContentBody>
              <CourseDetailsGrid />
              <CourseLessons />
              <PostBody />
              <CommentSection
                lang={lang}
                courseId={id}
                commentCount={data.commentCount}
              />
            </ContentBody>
            <SideBar variant="sticky">
              <CourseInfoSideCard data={data} />
              <TeacherSideCard lang={lang} teacherId={data.teacherId} />
              <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
            </SideBar>
          </DetailsSection>
        </>
      )}
    </main>
  );
};

export default CoursesIDPage;

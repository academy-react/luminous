import { notFound } from "next/navigation";

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

  if (!data) notFound();

  return (
    <main className="container">
      <UrlBar />
      <CourseInfo lang={lang} data={data} />
      <DetailsSection>
        <ContentBody>
          <CourseDetailsGrid lang={lang} />
          {/* <CourseLessons /> */}
          {/* <PostBody /> */}
          <CommentSection
            lang={lang}
            typeOf="course"
            courseId={id}
            commentCount={data.commentCount}
          />
        </ContentBody>
        <SideBar variant="sticky">
          <CourseInfoSideCard lang={lang} data={data} />
          <TeacherSideCard lang={lang} teacherId={data.teacherId} />
          <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
        </SideBar>
      </DetailsSection>
    </main>
  );
};

export default CoursesIDPage;

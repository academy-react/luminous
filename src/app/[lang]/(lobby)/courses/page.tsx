import { courseCategory } from "@/dict/list/list-category.dict";
import { courseSortOptions } from "@/dict/list/list-options.dict";
import { courses } from "@/dict/lobby/courses.dict";

import { CourseFullCard } from "@/components/course-page/cards/course-full-card";
import { CourseMidCard } from "@/components/course-page/cards/course-mid-card";
import PageAnimationWrapper from "@/components/layout/animation/page-animation-wrapper";
import {
  ListContent,
  ListPage,
  ListSideBar,
  ListTitle,
} from "@/components/list-page/list-page";
import {
  ListCategory,
  ListCommingSoon,
  ListFree,
  ListTeacher,
} from "@/components/list-page/side-bar-items";
import { ListSearch } from "@/components/list-page/side-bar-items/list-search";

import { type Locale } from "#/i18n.config";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="mt-10 flex h-full items-center justify-center px-28">
      <ListPage className="">
        <ListTitle />
        <ListSideBar className="">
          <ListSearch lang={lang} />
          <ListCategory category={courseCategory} lang={lang} />
          <ListFree lang={lang} />
          <ListCommingSoon lang={lang} />
          <ListTeacher lang={lang} />
        </ListSideBar>
        <ListContent
          sortOptions={courseSortOptions}
          lang={lang}
          FullCard={CourseFullCard}
          MidCard={CourseMidCard}
          data={courses}
        />
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default CoursesPage;

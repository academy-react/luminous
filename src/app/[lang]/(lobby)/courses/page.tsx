import { courseCategory } from "@/dict/list/list-category.dict";
import { courseSortOptions } from "@/dict/list/list-options.dict";
import { courses } from "@/dict/lobby/courses.dict";

import { CourseFullCard } from "@/components/cards/course-full-card";
import { CourseMidCard } from "@/components/cards/course-mid-card";
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
import { Pagination } from "@/components/common/pagination";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory category={courseCategory} lang={lang} />
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
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

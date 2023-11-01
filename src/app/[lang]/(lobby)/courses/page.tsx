import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import { CourseFullCard } from "@/components/pages/list-page/cards/course-full-card";
import { CourseMidCard } from "@/components/pages/list-page/cards/course-mid-card";
import {
  ListContent,
  ListPage,
  ListSideBar,
  ListTitle,
} from "@/components/pages/list-page/list-page";
import {
  ListCategory,
  ListCommingSoon,
  ListFree,
  ListSearch,
  ListTeacher,
} from "@/components/pages/list-page/side-bar-items";

import { courses } from "@/dict/dev/courses.dict";
import { courseCategory } from "@/dict/dev/list-category.dict";
import { courseSortOptions } from "@/dict/pages/list.dict";

import { type Locale } from "#/i18n.config";

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

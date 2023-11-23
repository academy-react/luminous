import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CourseFullCard,
  CourseMidCard,
} from "@/components/pages/list-page/cards";
import {
  // ListContent,
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

import { courseCategoryDict } from "@/dict/dev";
import { courseSortOptionsDict } from "@/dict/pages/list.dict";

import { getCoursesByQuery } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const CoursesPage = async ({
  params: { lang },
  searchParams
}: {
  params: { lang: Locale };
  searchParams?: {
    Query?: string;
    PageNumber?: string;
  };

}) => {
  const query = searchParams?.Query || '';
  const currentPage = Number(searchParams?.PageNumber) || 1;
  const searchData = await getCoursesByQuery(currentPage,query,);
console.log(searchData);
  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory category={courseCategoryDict} lang={lang} />
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
          <ListTeacher lang={lang} />
        </ListSideBar>
        {/* <ListContent
          sortOptions={courseSortOptionsDict}
          lang={lang}
          FullCard={CourseFullCard}
          MidCard={CourseMidCard}
          data={searchData}
        /> */}
      </ListPage>
    
    </PageAnimationWrapper>
  );
};

export default CoursesPage;

import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CourseFullCard,
  CourseMidCard,
} from "@/components/pages/list-page/cards";
import { ContentBar } from "@/components/pages/list-page/content/content-bar";
import { ContentBody } from "@/components/pages/list-page/content/content-body";
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
import { Pagination } from "@/components/elements/common";

import { courseCategoryDict } from "@/dict/dev";
import {
  courseSortOptionsDict,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { getCoursesByPagination } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const CoursesPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: {
    Query?: string;
    PageNumber?: string;
    view?: SwitchedListStates;
    sortOption?: string;
  };
}) => {
  const query = searchParams?.Query || "";
  const currentPage = Number(searchParams?.PageNumber) || 1;
  const view = searchParams?.view || "grid";
  const sortOption = Number(searchParams?.sortOption) || 0;
  const searchData = await getCoursesByPagination({ currentPage, query });

  if (!searchData) {
    return null;
  }
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
        <ListContent>
          <ContentBar
            sortOptions={courseSortOptionsDict}
            lang={lang}
            selectedOption={sortOption}
            switchedList={view}
          />
          <ContentBody
            lang={lang}
            selectedOption={sortOption}
            FullCard={CourseFullCard}
            MidCard={CourseMidCard}
            data={searchData?.courseFilterDtos}
            switchedList={view}
            typeOf="course"
          />
          <Pagination
            className="mx-auto mt-4 w-fit"
            // totalPages = {paginationData}
          />
        </ListContent>
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default CoursesPage;

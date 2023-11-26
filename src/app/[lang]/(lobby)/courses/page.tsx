import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CourseFullCard,
  CourseMidCard,
} from "@/components/pages/list-page/cards";
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

import { courseCategoryDict } from "@/dict/dev";
import { SwitchedListStates, courseSortOptionsDict} from "@/dict/pages/list.dict";

import { getCoursesByPagination } from "@/core/services/api";

import { type Locale } from "#/i18n.config";
import { ContentBar } from "@/components/pages/list-page/content/content-bar";
import { ContentBody } from "@/components/pages/list-page/content/content-body";
import { Pagination } from "@/components/elements/common";

const CoursesPage = async ({
  params: { lang },
  searchParams,
}: {
  params: { lang: Locale };
  searchParams?: {
    query?: string;
    page?: string;
    perPage?: number;
    view?: SwitchedListStates;
    sort?: string;
  };

}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 0;
  const rows = searchParams?.perPage || 2;
  const view = searchParams?.view || "grid";
  const sortOption = Number(searchParams?.sort )|| 0;
  const data = await getCoursesByQuery({currentPage,query,rows});

  if(!data){return null}
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
        data={data?.courseFilterDtos}
        switchedList={view}
        typeOf="course"
      />
      <Pagination
      className=" mt-4"
      totalCount ={data.totalCount}
      
      />
        </ListContent>
      </ListPage>
    
    </PageAnimationWrapper>
  );
};

export default CoursesPage;

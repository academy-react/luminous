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

import {
  courseSortOptionsDict,
  SortTypeStates,
  SwitchedListStates,
} from "@/dict/pages/list.dict";

import {
  getCourseCategories,
  getCoursesByPagination,
} from "@/core/services/api";

import { type Locale } from "#/i18n.config";

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
    sort?: string; //sort option of content bar
    order?: SortTypeStates; 
    tech?: string;

  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;
  const rows = searchParams?.perPage || 2;
  const view = searchParams?.view || "grid";
  const sortCol = searchParams?.sort || "Active";
  const sortType = searchParams?.order || "DESC";
  const listTech = searchParams?.tech || "";
  const data = await getCoursesByPagination({ currentPage, query, rows , sortCol , sortType , listTech });
  const categoriesData = await getCourseCategories();
  if (!data || !categoriesData) {
    return null;
  }

console.log(data);
console.log(sortType , sortCol);

  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory category={categoriesData} lang={lang} />
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
            selectedOption={{col: sortCol , type: sortType}}
            switchedList={view}
            

          />
          <ContentBody
            lang={lang}
            FullCard={CourseFullCard}
            MidCard={CourseMidCard}
            data={data?.courseFilterDtos}
            switchedList={view}
            typeOf="course"
          />
          <Pagination className=" mt-4" totalCount={data.totalCount} />
        </ListContent>
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default CoursesPage;

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
  courseDateSortOptionsDict,
  coursePriceSortOptionsDict,
  courseSortOptionsDict,
  type SortTypeStates,
  type SwitchedListStates,
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
    techIds?: string;
    techCount?: number;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;
  const rows = searchParams?.perPage || 2;
  const view = searchParams?.view || "grid";
  const sortCol = searchParams?.sort || "Active";
  const sortType = searchParams?.order || "DESC";
  const listTech = searchParams?.techIds || "";
  const count = searchParams?.techCount || listTech === "" ? 0 : 1;
  const data = await getCoursesByPagination({
    currentPage,
    query,
    rows,
    sortCol,
    sortType,
    listTech,
    count,
  });
  const categoriesData = await getCourseCategories();
  if (!data || !categoriesData) {
    return null;
  }

  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory courseCategory={categoriesData} lang={lang} />
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
          <ListTeacher lang={lang} />
        </ListSideBar>
        <ListContent>
          <ContentBar
            sortOptions={courseSortOptionsDict}
            sortDateOption={courseDateSortOptionsDict}
            sortPriceOption={coursePriceSortOptionsDict}
            lang={lang}
            selectedOption={{ col: sortCol, type: sortType }}
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

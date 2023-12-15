import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import { BlogFullCard } from "@/components/pages/list-page/cards/blog-full-card";
import { BlogMidCard } from "@/components/pages/list-page/cards/blog-mid-card";
import { NewsContentBar } from "@/components/pages/list-page/content/content-bar";
import { NewsContentBody } from "@/components/pages/list-page/content/content-body";
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
import { Pagination } from "@/components/elements/common/pagination";

import {
  blogDateSortOptionsDict,
  blogSortOptionsDict,
  SortTypeStates,
  SwitchedListStates,
} from "@/dict/pages/list.dict";

import { getNewsFilterPages } from "@/core/services/api/news/get/get-news-filter-pages.api";
import { getListNewsCategories } from "@/core/services/api/news/get/get-news-list-categories.api";

import { type Locale } from "#/i18n.config";

const BlogPage = async ({
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
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 0;
  const rows = searchParams?.perPage || 2;
  const view = searchParams?.view || "grid";
  const sortCol = searchParams?.sort || "Active";
  const sortType = searchParams?.order || "DESC";
  const tech = searchParams?.techIds || "";
  const categoriesData = await getListNewsCategories();
  const data = await getNewsFilterPages({
    currentPage,
    query,
    rows,
    sortCol,
    sortType,
    tech,
  });

  if (!data || !categoriesData) {
    return null;
  }
  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory newsCategory={categoriesData} lang={lang} />
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
          <ListTeacher lang={lang} />
        </ListSideBar>
        <ListContent>
          <NewsContentBar
            sortOptions={blogSortOptionsDict}
            // sortDateOption={blogDateSortOptionsDict}
            lang={lang}
            selectedOption={{ col: sortCol, type: sortType }}
            switchedList={view}
          />
          <NewsContentBody
            lang={lang}
            NewsFullCard={BlogFullCard}
            NewsMidCard={BlogMidCard}
            newsData={data.news}
            switchedList={view}
          />
          <Pagination className=" mt-4" totalCount={data.totalCount} />
        </ListContent>
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default BlogPage;

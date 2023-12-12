import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import { BlogFullCard } from "@/components/pages/list-page/cards/blog-full-card";
import { BlogMidCard } from "@/components/pages/list-page/cards/blog-mid-card";
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
import { Pagination } from "@/components/elements/common/pagination";

import { blogsDict } from "@/dict/dev/blog-list.dict";
import { blogSortOptionsDict } from "@/dict/pages/list.dict";

import { getListNewsCategories } from "@/core/services/api/news/get/get-news-list-categories.api";

import { type Locale } from "#/i18n.config";

const BlogPage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const categoriesData = await getListNewsCategories();

  if (!categoriesData) {
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
          <ContentBar
            sortOptions={blogSortOptionsDict}
            lang={lang}
            selectedOption={{ col: sortCol, type: sortType }}
            switchedList={view}
          />
          <ContentBody
            lang={lang}
            FullCard={BlogFullCard}
            MidCard={BlogMidCard}
            data={data?.courseFilterDtos}
            switchedList={view}
            typeOf="news"
          />
          <Pagination className=" mt-4" totalCount={data.totalCount} />
        </ListContent>
        {/* <ListContent
          sortOptions={blogSortOptionsDict}
          lang={lang}
          FullCard={BlogFullCard}
          MidCard={BlogMidCard}
          data={blogsDict}
        /> */}
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default BlogPage;

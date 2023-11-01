import { blogs } from "@/dict/dev/blog-list.dict";
import { blogCategory } from "@/dict/list/list-category.dict";
import { blogSortOptions } from "@/dict/list/list-options.dict";

import { BlogFullCard } from "@/components/cards/blog-full-card";
import { BlogMidCard } from "@/components/cards/blog-mid-card";
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
  ListSearch,
  ListTeacher,
} from "@/components/list-page/side-bar-items";

import { type Locale } from "#/i18n.config";

const BlogPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="mt-10 h-full w-full">
      <ListPage>
        <ListTitle />
        <ListSideBar>
          <ListSearch lang={lang} />
          <ListCategory category={blogCategory} lang={lang} />
          <div className="flex gap-3 md:flex-col">
            <ListFree lang={lang} />
            <ListCommingSoon lang={lang} />
          </div>
          <ListTeacher lang={lang} />
        </ListSideBar>
        <ListContent
          sortOptions={blogSortOptions}
          lang={lang}
          FullCard={BlogFullCard}
          MidCard={BlogMidCard}
          data={blogs}
        />
      </ListPage>
    </PageAnimationWrapper>
  );
};

export default BlogPage;

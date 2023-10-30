
import { CourseFullCard } from "@/components/course-page/cards/course-full-card";
import {
  ListContent,
  ListPage,
  ListSideBar,
  ListTitle,
} from "@/components/list-page/list-page";
import { ListSearch } from "@/components/list-page/side-bar-items/list-search";

import { type Locale } from "#/i18n.config";
import { ListCategory } from "@/components/list-page/side-bar-items/list-category";
import { ListTeacher } from "@/components/list-page/side-bar-items/list-teacher";
import { courseSortOptions } from "@/dict/list/list-options.dict";
import { courseCategory } from "@/dict/list/list-category.dict";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="mt-10 flex h-full items-center justify-center px-28">
      <ListPage className="">
        <ListTitle />
        <ListSideBar className="">
          <ListSearch />
          <ListCategory category={courseCategory} lang={lang} />
          <ListTeacher/>
        </ListSideBar>
        <ListContent
          sortOptions={courseSortOptions}
          lang={lang}
          // FullCard={CourseFullCard}
        />
      </ListPage>
    </main>
  );
};

export default CoursesPage;

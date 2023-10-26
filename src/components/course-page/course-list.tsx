import { type Locale } from "#/i18n.config";

import { FilterByCategory } from "./sort-filter/filter-by-category";
import { FilterByTeacher } from "./sort-filter/fiter-by-teacher";
import { Search } from "./sort-filter/search-in-courses";
import { SortByTitle } from "./sort-filter/sort-by-title";

export const CourseList = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-[700px] w-full gap-3 border border-black">
      <div className="flex w-[30%] flex-col gap-3 border border-black">
        <div className="w-full rounded-xl p-4 shadow"><Search/></div>
        <div className="w-full rounded-xl p-4 shadow">
          <FilterByCategory lang={lang} />
        </div>
        <div className="w-full rounded-xl p-4 shadow">
          <FilterByTeacher />
        </div>
      </div>
      <div className="w-[70%] border border-black">
        <div className="w-full rounded-xl p-4 shadow"><SortByTitle/></div>
        <div className="w-full rounded-xl p-4 shadow">list</div>
      </div>
    </div>
  );
};

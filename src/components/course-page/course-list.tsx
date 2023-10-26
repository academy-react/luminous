
import { type Locale } from "#/i18n.config";

import { FilterByCategory } from "./sort-filter/filter-by-category";
import { FilterByTeacher } from "./sort-filter/fiter-by-teacher";
import { Search } from "./sort-filter/search-in-courses";
import { SortBySize } from "./sort-filter/sort-by-size";
import { SortByTitle } from "./sort-filter/sort-by-title";

export const CourseList = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-[700px] w-full gap-3 border border-black">
      <div className="flex w-[25%] flex-col gap-3 border border-black">
        <div className="w-full rounded-xl p-4 shadow">
          <Search />
        </div>
        <div className="w-full rounded-xl p-4 shadow">
          <FilterByCategory lang={lang} />
        </div>
        <div className="w-full rounded-xl p-4 shadow">
          <FilterByTeacher />
        </div>
      </div>
      <div className="flex w-[75%] flex-col  gap-3 border border-black">
        <div className="flex items-center justify-between rounded-xl p-4 shadow">
          <div className="w-full">
            <SortByTitle />
          </div>
          <div className=" flex justify-end">
            <SortBySize />
          </div>
        </div>

        <div className="w-full rounded-xl p-4 shadow">
          
        </div>
      </div>
    </div>
  );
};

import { type Locale } from "#/i18n.config";

import { FilterByCategory } from "./sort-filter/filter-by-category";
import { FilterByTeacher } from "./sort-filter/fiter-by-teacher";
import { Search } from "./sort-filter/search-in-courses";

export const CourseSideBar = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex flex-col gap-3">
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
  );
};

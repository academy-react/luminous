import { type Locale } from "#/i18n.config";

import { Search } from "./sort-filter/search-in-blog";
import { FilterByCategory } from "./sort-filter/sort-by-category";

export const BlogSideBar = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-full rounded-xl p-4 shadow">
        <Search />
      </div>
      <div className="w-full rounded-xl p-4 shadow">
        <FilterByCategory lang={lang} />
      </div>
    </div>
  );
};

import { courses } from "@/dict/lobby/courses.dict";

import { type Locale } from "#/i18n.config";

import { CourseFullCard } from "./course-full-card";
import { FilterByCategory } from "./sort-filter/filter-by-category";
import { FilterByTeacher } from "./sort-filter/fiter-by-teacher";
import { Search } from "./sort-filter/search-in-courses";
import { SortBySize } from "./sort-filter/sort-by-size";
import { SortByTitle } from "./sort-filter/sort-by-title";

export const CourseList = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-full w-full gap-3 ">
      <div className="flex w-[25%] flex-col gap-3 ">
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
      <div className="flex w-[75%] flex-col  gap-3">
        <div className="flex items-center justify-between rounded-xl p-4 shadow">
          <div className="w-full">
            <SortByTitle />
          </div>
          <div className=" flex justify-end">
            <SortBySize />
          </div>
        </div>

        <div className="flex w-full flex-col  gap-4 rounded-xl shadow">
          {courses.map((item) => {
            return <CourseFullCard key={item.id} item={item} lang={lang} />;
          })}
        </div>
      </div>
    </div>
  );
};

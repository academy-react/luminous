import {type Locale } from "#/i18n.config";
import { SortBySize } from "./sort-filter/sort-by-size";
import { SortByTitle } from "./sort-filter/sort-by-title";

export const CourseContent = ({lang}:{lang: Locale}) => {
  return (
    <div className="flex w-[75%] flex-col  gap-3 border border-black">
      <div className="flex items-center justify-between rounded-xl p-4 shadow">
        <SortByTitle lang={lang}/>
       <SortBySize />
      </div>
    </div>
  );
};

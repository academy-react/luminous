import {type Locale } from "#/i18n.config";
import { SortBySize } from "./sort-filter/sort-by-size";

export const CourseContent = ({lang}:{lang: Locale}) => {
  return (
      <div >
       <SortBySize lang={lang} />
      </div>
    
  );
};

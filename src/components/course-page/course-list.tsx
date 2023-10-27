import { type Locale } from "#/i18n.config";

import { CourseContent } from "./course-content";
import { CourseSideBar } from "./course-side-bar";

export const CourseList = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-full w-full gap-3 ">
      <div className="flex w-[25%] flex-col  ">
        <CourseSideBar lang={lang} />
      </div>
      <div className="flex w-[75%] flex-col ">
        <CourseContent lang={lang} />
      </div>

    </div>
  );
};

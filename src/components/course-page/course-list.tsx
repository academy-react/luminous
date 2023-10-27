
import { type Locale } from "#/i18n.config";
import { CourseContent } from "./course-content";
import { CourseSideBar } from "./course-side-bar";



export const CourseList = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-full w-full gap-3 ">
      <CourseSideBar lang={lang} />
      <CourseContent lang={lang} />
    </div>
  );
};

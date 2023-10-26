
import { type Locale } from "#/i18n.config";
import { CourseList } from "@/components/course-page/course-list";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center px-36">
  <CourseList lang={lang}/>
    </main>
  );
};

export default CoursesPage;

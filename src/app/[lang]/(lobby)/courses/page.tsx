
import { type Locale } from "#/i18n.config";
import CourseSection from "@/components/lobby/courses/course-section";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="mt-10 flex h-full items-center justify-center px-20">
      <CourseSection lang={lang} />
    </main>
  );
};

export default CoursesPage;

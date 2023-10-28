
import { type Locale } from "#/i18n.config";
import { CoursePageSection } from "@/components/course-page/course-page-section";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="mt-10 flex h-full items-center justify-center px-28">
      <CoursePageSection lang={lang} />
    </main>
  );
};

export default CoursesPage;

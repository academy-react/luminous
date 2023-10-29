import { CoursePageSection } from "@/components/course-page/course-page-section";

import { type Locale } from "#/i18n.config";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="mt-10 flex h-full items-center justify-center px-20">
      <CoursePageSection lang={lang} />
    </main>
  );
};

export default CoursesPage;

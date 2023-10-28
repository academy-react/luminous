import { CourseList } from "@/components/course-page/course-list";

import { type Locale } from "#/i18n.config";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="mt-10 flex h-full items-center justify-center px-20">
      <CourseList lang={lang} />
    </main>
  );
};

export default CoursesPage;

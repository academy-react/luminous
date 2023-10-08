import CourseCard from "@/components/layout/courses/course-card";

import { type Locale } from "#/i18n.config";

const CoursesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی کورس‌ها</h1>
      <CourseCard />
    </main>
  );
};

export default CoursesPage;

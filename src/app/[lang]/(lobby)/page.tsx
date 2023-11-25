import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CategoriesSection,
  CourseSection,
  HeroSection,
  NewsSection,
  ServiceSection,
} from "@/components/pages/lobby";
import { TeachersSection } from "@/components/pages/lobby/client";
import { TempTitle } from "@/components/utils/temp-title";

import { getAllTeacher, getTopCoursesList } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

const HomePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const courseData = await getTopCoursesList();
  const teacherData = await getAllTeacher();

  return (
    <PageAnimationWrapper className="flex w-full flex-col items-center justify-center gap-10">
      <HeroSection lang={lang} />
      <ServiceSection lang={lang} />
      <CourseSection lang={lang} data={courseData} />
      <CategoriesSection lang={lang} />
      <TeachersSection lang={lang} data={teacherData} />
      <NewsSection lang={lang} />
      <TempTitle lang={lang} />
    </PageAnimationWrapper>
  );
};

export default HomePage;

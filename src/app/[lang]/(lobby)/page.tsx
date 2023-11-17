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

import { getTopCoursesList } from "@/core/services/api";

import { type Locale } from "#/i18n.config";
import { getAllTeacher } from "@/core/services/api/teacher/get-all-teachers";
import { getCategories } from "@/core/services/api/category";

const HomePage = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const courseData = await getTopCoursesList();
  const teacherData = await getAllTeacher();
  const categoryData = await getCategories();
  return (
    <PageAnimationWrapper className="flex w-full flex-col items-center justify-center gap-10">
      <HeroSection lang={lang} />
      <ServiceSection lang={lang} />
      <CourseSection lang={lang} data={courseData}/>
      <CategoriesSection lang={lang} data={categoryData}/>
      <TeachersSection lang={lang} data={teacherData} />
      <NewsSection lang={lang} />
      <TempTitle lang={lang} />
    </PageAnimationWrapper>
  );
};

export default HomePage;

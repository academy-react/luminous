import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import { CategoriesSection } from "@/components/pages/lobby/categories/category-section";
import { CourseSection } from "@/components/pages/lobby/courses/course-section";
import { HeroSection } from "@/components/pages/lobby/hero/hero-section";
import { NewsSection } from "@/components/pages/lobby/news/news-section";
import { ServiceSection } from "@/components/pages/lobby/services/service-section";
import { TeachersSection } from "@/components/pages/lobby/teachers/teachers-section";
import { TempTitle } from "@/components/utils/temp-title";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="flex w-full flex-col items-center justify-center gap-10">
      <HeroSection lang={lang} />
      <ServiceSection lang={lang} />
      <CourseSection lang={lang} />
      <CategoriesSection lang={lang} />
      <TeachersSection lang={lang} />
      <NewsSection lang={lang} />
      <TempTitle lang={lang} />
    </PageAnimationWrapper>
  );
};

export default HomePage;

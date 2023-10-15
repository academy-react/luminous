import CourseSection from "@/components/lobby/courses/course-section";
import HeroSection from "@/components/lobby/hero/hero-section";
import ThemeSwitcher from "@/components/utils/theme-switcher";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="h-fit w-full">
        <HeroSection lang={lang} />
      </div>
      {/* courseSection */}
      <CourseSection />

      <ThemeSwitcher lang={lang} />
    </main>
  );
};

export default HomePage;

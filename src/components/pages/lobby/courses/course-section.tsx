import Link from "next/link";

import { CourseCard } from "@/components/pages/lobby/courses/course-card";
import { CourseSideCard } from "@/components/pages/lobby/courses/course-side-card";
import { TitleBox } from "@/components/pages/lobby/title-box";
import { Button } from "@/components/elements/ui/button";

import { courses } from "@/dict/lobby/courses.dict";
import { coursesTitleBox } from "@/dict/lobby/lobby-title-box.dict";

import { type Locale } from "#/i18n.config";

export const CourseSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={coursesTitleBox.title}
        desc={coursesTitleBox.subtitle}
      />
      <div className="container flex w-full max-w-screen-lg flex-col gap-4 md:flex-row md:items-center">
        <div className="h-full grow md:w-[70%]">
          {courses[0] && (
            <CourseCard
              lang={lang}
              img={courses[0].image}
              title={courses[0].title}
              desc={courses[0].description}
              teacher={courses[0].teacher}
            />
          )}
        </div>
        <div className="grow rounded-xl bg-card shadow">
          <div className="flex h-full w-full items-center justify-center gap-4 p-4 md:flex-col">
            <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex">
              {courses &&
                courses
                  .slice(1, 5)
                  .map((course, index) => (
                    <CourseSideCard key={index} img={course.image} />
                  ))}
            </div>
            <div className="flex w-full items-center justify-center gap-4 md:hidden">
              {courses &&
                courses
                  .slice(1, 4)
                  .map((course, index) => (
                    <CourseSideCard key={index} img={course.image} />
                  ))}
            </div>
            <Button className="w-full max-w-fit rounded-lg border-2 border-primary bg-primary p-3 text-secondary duration-300 hover:bg-card hover:text-primary">
              <Link href="#" className="">
                <p className="hidden md:block">
                  {
                    {
                      fa: "دوره‌های بیشتر",
                      en: "More Courses",
                    }[lang]
                  }
                </p>
                <p className="md:hidden">
                  {
                    {
                      fa: "بیشتر",
                      en: "More",
                    }[lang]
                  }
                </p>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

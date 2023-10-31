import Link from "next/link";

import { courses } from "@/dict/lobby/courses.dict";
import { coursesTitleBox } from "@/dict/lobby/lobby-title-box.dict";

import { Button } from "@/components/ui/button";
import { CourseCard } from "@/components/lobby/courses/course-card";
import { CourseSideCard } from "@/components/lobby/courses/course-side-card";
import { TitleBox } from "@/components/lobby/title-box";

import { type Locale } from "#/i18n.config";

export const CourseSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={coursesTitleBox.title}
        desc={coursesTitleBox.subtitle}
      />
      <div className="container flex w-full max-w-screen-lg gap-4">
        <div className="w-[70%]">
          {courses[0] && (
            <CourseCard
              lang={lang}
              title={courses[0].title}
              desc={courses[0].description}
              teacher={courses[0].teacher}
            />
          )}
        </div>
        <div className="w-[30%] rounded-xl bg-card shadow">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
            <CourseSideCard />
            <CourseSideCard />
            <CourseSideCard />
            <Button className="w-full max-w-fit rounded-lg border-2 border-primary bg-primary p-3 text-secondary duration-300 hover:bg-card hover:text-primary">
              <Link href="#" className="">
                {
                  {
                    fa: "دوره‌های بیشتر",
                    en: "More Courses",
                  }[lang]
                }
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

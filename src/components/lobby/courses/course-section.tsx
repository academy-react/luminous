import Link from "next/link";

import { courses } from "@/dict/lobby/courses.dict";
import { coursesTitleBox } from "@/dict/lobby/lobby-title-box.dict";

import { Button } from "@/components/ui/button";
import CourseFullCard from "@/components/lobby/courses/course-full-card";
import CourseMiniCard from "@/components/lobby/courses/course-mini-card";
import TitleBox from "@/components/lobby/title-box";

import { type Locale } from "#/i18n.config";

const CourseSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="container flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={coursesTitleBox.title}
        desc={coursesTitleBox.subtitle}
      />
      <div className="container flex w-full max-w-screen-lg flex-col gap-4 lg:flex-row">
        <div className="w-full lg:w-[70%]">
          {courses[0] && (
            <CourseFullCard
              lang={lang}
              title={courses[0].title}
              desc={courses[0].description}
              teacher={courses[0].teacher}
              image={courses[0].image}
            />
          )}
        </div>
        <div className="w-full rounded-xl border shadow lg:w-[30%]">
          <div className="flex h-full w-full flex-row items-center justify-center gap-4 p-4 lg:flex-col">
            {courses.slice(1, 4).map((course) => {
              return <CourseMiniCard key={course.id} image={course.image} />;
            })}

            <Button className="hidden w-full max-w-fit rounded-lg border-2 border-purple-primary p-3 text-purple-primary duration-300 hover:bg-purple-primary hover:text-white sm:block">
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
    </section>
  );
};

export default CourseSection;

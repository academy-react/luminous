import Link from "next/link";

import { TitleBox } from "@/components/pages/lobby";
import { CourseCard } from "@/components/pages/lobby/courses/course-card";
import { CourseSideCard } from "@/components/pages/lobby/courses/course-side-card";
import { FetchErrorAnnouncement } from "@/components/elements/common/error-announcement";
import { Button } from "@/components/elements/ui";

import { coursesTitleBoxDict } from "@/dict/pages/lobby.dict";

import { getTopCoursesList } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const CourseSection = async ({ lang }: { lang: Locale }) => {
  const data = await getTopCoursesList();

  return (
    <section className="relative mt-24">
      <div className="container">
        <TitleBox
          lang={lang}
          title={coursesTitleBoxDict.title}
          desc={coursesTitleBoxDict.subtitle}
        />
        {!data ? (
          <FetchErrorAnnouncement
            place={coursesTitleBoxDict.title}
            lang={lang}
          />
        ) : (
          <div className="container flex w-full max-w-screen-lg flex-col gap-4 md:flex-row md:items-center">
            <div className="h-full grow md:w-[70%]">
              {data[0] && <CourseCard lang={lang} data={data[0]} />}
            </div>
            <div className="grow rounded-xl bg-card shadow">
              <div className="flex h-full w-full items-center justify-center gap-4 p-4 md:flex-col">
                <div className="hidden w-full flex-col items-center justify-center gap-4 md:flex">
                  {/* new */}
                  {data.slice(1, 4).map((course, index) => (
                    <CourseSideCard key={index} img={course.tumbImageAddress} />
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
        )}
      </div>
    </section>
  );
};

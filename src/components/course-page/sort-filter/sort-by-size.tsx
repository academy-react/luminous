"use client";

import { sortTitle } from "@/dict/dev/course-list.dict";
import { courses } from "@/dict/lobby/courses.dict";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

import { CourseFullCard } from "../course-full-card";
import { CourseMidCard } from "../course-mid-card";

export const SortBySize = ({ lang }: { lang: Locale }) => {
  return (
    <Tabs
      defaultValue="grid"
      dir={lang === "fa" ? "rtl" : "ltr"}
      className="flex flex-col gap-3 "
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between  rounded-xl py-2 shadow">
          {/* sort-by-title */}
          <div>
            <TabsList>
              {sortTitle.map((item) => {
                return (
                  <TabsTrigger key={item.id} value={item.value[lang]} className=" focus:border-b-2 focus:border-[#555] focus:text-[#555]">
                    {item.title[lang]}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
          {/* sort-by-size */}
          <div>
            <TabsList >
              <TabsTrigger value="grid" className="focus:text-[#555]">
                <Icons.layoutGrid />
              </TabsTrigger>
              <TabsTrigger value="list" className="focus:text-[#555]">
                <Icons.layoutList />
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <div>
          {/* tabs-content of sort by size */}
          <TabsContent value="grid" className="grid grid-cols-3 gap-4 ">
            {courses.map((item) => {
              return <CourseMidCard key={item.id} item={item} lang={lang} />;
            })}
          </TabsContent>
          <TabsContent value="list" className="mt-0 flex flex-col gap-4">
            {courses.map((item) => {
              return <CourseFullCard key={item.id} item={item} lang={lang} />;
            })}
          </TabsContent>
          {/*  tabs-content of sort by title */}
        </div>
      </div>
    </Tabs>
  );
};

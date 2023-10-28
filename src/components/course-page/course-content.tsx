import { sortTitle } from "@/dict/dev/course-list.dict";
import { courses } from "@/dict/lobby/courses.dict";

import { type Locale } from "#/i18n.config";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Icons } from "../utils/icons";
import { CourseFullCard } from "./cards/course-full-card";
import { CourseMidCard } from "./cards/course-mid-card";

export const CourseContent = ({ lang }: { lang: Locale }) => {
  //start maps.......
  const sortGrid = courses.map((item) => {
    return <CourseMidCard key={item.id} item={item} lang={lang} />;
  });
  const sortList = courses.map((item) => {
    return <CourseFullCard key={item.id} item={item} lang={lang} />;
  });
  const sortTitles = sortTitle.map((item) => {
    return (
      <TabsTrigger
        key={item.id}
        value={item.value[lang]}
        className=" focus:border-b-2 focus:border-[#555] focus:text-[#555]"
      >
        {item.title[lang]}
      </TabsTrigger>
    );
  });
//end maps........
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
            <TabsList>{sortTitles}</TabsList>
          </div>
          {/* sort-by-size */}
          <div>
            <TabsList>
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
          <TabsContent value="grid" className="grid grid-cols-4 gap-4 ">
            {sortGrid}
          </TabsContent>
          <TabsContent value="list" className="mt-0 flex flex-col gap-4">
            {sortList}
          </TabsContent>
          {/*  tabs-content of sort by title */}
        </div>
      </div>
    </Tabs>
  );
};

import { type BlogFullCardProps } from "@/components/pages/list-page/cards/blog-full-card";
import { type BlogMidCardProps } from "@/components/pages/list-page/cards/blog-mid-card";
import { type CourseFullCardProps } from "@/components/pages/list-page/cards/course-full-card";
import { type CourseMidCardProps } from "@/components/pages/list-page/cards/course-mid-card";

import { type BlogsPropsDict } from "@/dict/dev/blog-list.dict";
import { type CoursesDictProps } from "@/dict/dev/courses.dict";
import { type SwitchedListStates } from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type ContentBodyProps = {
  lang: Locale;
  selectedOption: number;
  FullCard: React.FC<CourseFullCardProps> | React.FC<BlogFullCardProps>;
  MidCard: React.FC<CourseMidCardProps> | React.FC<BlogMidCardProps>;
  switchedList: SwitchedListStates;
  data: CoursesDictProps[] | BlogsPropsDict[];
};

export const ContentBody = ({
  lang,
  selectedOption,
  FullCard,
  switchedList,
  MidCard,
  data,
}: ContentBodyProps) => {
  console.log(data);
  return (
    <div className="">
      <div
        className={cn(
          "grid gap-4",
          switchedList === "grid" ? "grid-cols-3 " : "grid-cols-1 "
        )}
      >
        {data.map((item) => (
          <>
            {switchedList === "grid" ? (
              <MidCard key={item.id} item={item} lang={lang} />
            ) : (
              <FullCard key={item.id} item={item} lang={lang} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

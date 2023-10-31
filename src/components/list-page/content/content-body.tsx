import { cn } from "@/lib/utils";
import { type BlogsProps } from "@/dict/dev/blog-list.dict";
import { type switchedListStates } from "@/dict/list/list-grid-switch.dict";
import { type CoursesProps } from "@/dict/lobby/courses.dict";

import { type BlogFullCardProps } from "@/components/cards/blog-full-card";
import { type BlogMidCardProps } from "@/components/cards/blog-mid-card";
import { type CourseFullCardProps } from "@/components/cards/course-full-card";
import { type CourseMidCardProps } from "@/components/cards/course-mid-card";

import { type Locale } from "#/i18n.config";

type ContentBodyProps = {
  lang: Locale;
  selectedOption: number;
  FullCard: React.FC<CourseFullCardProps> | React.FC<BlogFullCardProps>;
  MidCard: React.FC<CourseMidCardProps> | React.FC<BlogMidCardProps>;
  switchedList: switchedListStates;
  data: CoursesProps[] | BlogsProps[];
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

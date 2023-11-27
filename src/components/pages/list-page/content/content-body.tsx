import {
  type BlogFullCardProps,
  type BlogMidCardProps,
  type CourseFullCardProps,
  type CourseMidCardProps,
} from "@/components/pages/list-page/cards";

import { type SwitchedListStates } from "@/dict/pages/list.dict";

import { AllCourseFilterDtoType, AllNewsType } from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type ContentBodyProps = {
  lang: Locale;
  selectedOption: number;
  switchedList: SwitchedListStates;
} & CourseContentProps;
type CourseContentProps = {
  typeOf: "course";
  FullCard: React.FC<CourseFullCardProps>;
  MidCard: React.FC<CourseMidCardProps>;
  data: AllCourseFilterDtoType;
};

// type NewsContentProps ={
//   typeOf: "news";
//   FullCard: React.FC<BlogFullCardProps>;
//   MidCard: React.FC<BlogMidCardProps>;
//   data: AllNewsType;
// }

export const ContentBody = (props: ContentBodyProps) => {
  const {
    lang,
    selectedOption,
    switchedList,
    FullCard,
    MidCard,
    data,
    typeOf,
  } = props;
  return (
    <div className="">
      <div
        className={cn(
          "grid gap-4",
          switchedList === "grid" ? "grid-cols-3 " : "grid-cols-1 "
        )}
      >
        {typeOf === "course" &&
          data.map((item, index) => (
            <>
              {switchedList === "grid" ? (
                <MidCard key={index} item={item} lang={lang} />
              ) : (
                <FullCard key={index} item={item} lang={lang} />
              )}
            </>
          ))}
        {/* {typeOf === "news" && data.map((item , index) => (
          <>
            {switchedList === "grid" ? (
            <MidCard key={index} item={item} lang={lang} />
            ) : (
              <FullCard key={index} item={item} lang={lang} />
            )}
          </>
        ))} */}
      </div>
    </div>
  );
};

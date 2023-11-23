import {
  type BlogFullCardProps,
  type BlogMidCardProps,
  type CourseFullCardProps,
  type CourseMidCardProps,
} from "@/components/pages/list-page/cards";

import { type SwitchedListStates } from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";
import { type CourseByPaginationType, type NewsFilterPagesType } from "@/core/validators/api";

type ContentBodyProps = {
  lang: Locale;
  selectedOption: number;
  switchedList: SwitchedListStates;
}&(CourseContentProps | NewsContentProps)
type CourseContentProps ={
  typeOf: "course";
  FullCard: React.FC<CourseFullCardProps> 
  MidCard: React.FC<CourseMidCardProps> 
  data: CourseByPaginationType 
}

type NewsContentProps ={
  typeOf: "news";
  FullCard: React.FC<BlogFullCardProps>;
  MidCard: React.FC<BlogMidCardProps>;
  data: NewsFilterPagesType;
}

export const ContentBody = (props: ContentBodyProps) => {
  const { lang, selectedOption, switchedList,FullCard,MidCard,data, typeOf } = props;
  const filterdData = typeOf === 'course'? data.courseFilterDtos : data.news; 
  return (
    <div className="">
      <div
        className={cn(
          "grid gap-4",
          switchedList === "grid" ? "grid-cols-3 " : "grid-cols-1 "
        )}
      >
        {typeOf === "course" && data.courseFilterDtos.map((item , index) => (
          <>
            {switchedList === "grid" ? (
            <MidCard key={index} item={item} lang={lang} />
            ) : (
              <FullCard key={index} item={item} lang={lang} />
            )}
          </>
        ))}
           {typeOf === "news" && data.news.map((item , index) => (
          <>
            {switchedList === "grid" ? (
            <MidCard key={index} item={item} lang={lang} />
            ) : (
              <FullCard key={index} item={item} lang={lang} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { type switchedListStates } from "@/dict/list/list-grid-switch.dict";
import { type SortOptionProps } from "@/dict/list/list-options.dict";
import { type CoursesProps } from "@/dict/lobby/courses.dict";

import { type Locale } from "#/i18n.config";

import { type BlogFullCardProps } from "../blog-page/cards/blog-full-card";
import { type BlogMidCardProps } from "../blog-page/cards/blog-mid-card";
import { type CourseFullCardProps } from "../cards/course-full-card";
import { type CourseMidCardProps } from "../cards/course-mid-card";
import { ContentBar } from "./content/content-bar";
import { ContentBody } from "./content/content-body";

const ListPage = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-3 px-28 md:flex-row md:items-start  ",
        className
      )}
    >
      {children}
    </div>
  );
};
// list-Title
// type ListTitleProps = {
//   title:React.ReactNode;
//    lang: Locale;
// }
const ListTitle = () => {
  return <h1></h1>;
};

// list-sidebar
const ListSideBar = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col gap-3 md:w-[20%] ", className)}>
      {children}
    </div>
  );
};

// list-Content
type ListContentProps = {
  className?: string;
  sortOptions: SortOptionProps[];
  lang: Locale;
  FullCard: React.FC<CourseFullCardProps> | React.FC<BlogFullCardProps>;
  MidCard: React.FC<CourseMidCardProps> | React.FC<BlogMidCardProps>;
  data: CoursesProps[];
};

const ListContent = ({
  className,
  sortOptions,
  lang,
  FullCard,
  MidCard,
  data,
}: ListContentProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [switchedList, setSwitchedList] = useState<switchedListStates>("grid");
  return (
    <div className={cn("flex w-full flex-col gap-3 md:w-[80%]", className)}>
      <ContentBar
        sortOptions={sortOptions}
        lang={lang}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        switchedList={switchedList}
        setSwitchedList={setSwitchedList}
      />
      <ContentBody
        lang={lang}
        selectedOption={selectedOption}
        FullCard={FullCard}
        MidCard={MidCard}
        switchedList={switchedList}
        data={data}
      />
    </div>
  );
};

export { ListPage, ListTitle, ListSideBar, ListContent };

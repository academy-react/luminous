"use client";

import { useState } from "react";

import {
  type BlogFullCardProps,
  type BlogMidCardProps,
  type CourseFullCardProps,
  type CourseMidCardProps,
} from "@/components/pages/list-page/cards";
import { ContentBar } from "@/components/pages/list-page/content/content-bar";
import { ContentBody } from "@/components/pages/list-page/content/content-body";

import { type BlogsPropsDict } from "@/dict/dev/blog-list.dict";
import { type CoursesDictProps } from "@/dict/dev/courses.dict";
import {
  type SortOptionDictProps,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";
import { Pagination } from "@/components/elements/common";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

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
  sortOptions: SortOptionDictProps[];
  lang: Locale;
  FullCard: React.FC<CourseFullCardProps> | React.FC<BlogFullCardProps>;
  MidCard: React.FC<CourseMidCardProps> | React.FC<BlogMidCardProps>;
  data: CoursesDictProps[] | BlogsPropsDict[];
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
  const [switchedList, setSwitchedList] = useState<SwitchedListStates>("grid");
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
      <Pagination className="w-fit mx-auto mt-4"/>
    </div>
  );
};

export { ListPage, ListTitle, ListSideBar, ListContent };

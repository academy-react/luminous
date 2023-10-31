"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { switchedListStates } from "@/dict/list/list-grid-switch.dict";
import { type SortOptionProps } from "@/dict/list/list-options.dict";
import { type CoursesProps } from "@/dict/lobby/courses.dict";

import { type Locale } from "#/i18n.config";

import {
  BlogFullCardProps,
  type BlogFullCard,
} from "../blog-page/cards/blog-full-card";
import {
  BlogMidCardProps,
  type BlogMidCard,
} from "../blog-page/cards/blog-mid-card";
import {
  CourseFullCardProps,
  type CourseFullCard,
} from "../course-page/cards/course-full-card";
import {
  CourseMidCardProps,
  type CourseMidCard,
} from "../course-page/cards/course-mid-card";
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
    <div className={cn("flex h-full w-full gap-3 ", className)}>{children}</div>
  );
};

// list-Title
const ListTitle = () => {
  return <></>;
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
    <div className={cn("flex w-[20%] flex-col  gap-3 ", className)}>
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
    <div className={cn("flex w-[80%] flex-col gap-3", className)}>
      <ContentBar
        sortOptions={sortOptions}
        lang={lang}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        switchedList={switchedList}
        setSwitchedList={setSwitchedList}
      />
      <ContentBody
        className={""}
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

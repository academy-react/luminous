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

import {
  type SortOptionDictProps,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";
import { Pagination } from "@/components/elements/common";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";
import {AllNewsType } from "@/core/validators/api";
import { AllCourseFilterDtoType } from './../../../core/validators/api/course/course-pagination.schema';

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

const ListContent = ({children, className}:{children: React.ReactNode; className?:string;}) => {

  return (
    <div className={cn("flex w-full flex-col gap-3 md:w-[80%]", className)}>
    {children}
    </div>
  );
};

export { ListPage, ListTitle, ListSideBar, ListContent };

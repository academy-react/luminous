"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { SortOptionProps } from "@/dict/list/list-options.dict";

import { Locale } from "#/i18n.config";

import { CourseFullCard } from "../course-page/cards/course-full-card";
import { CourseMidCard } from "../course-page/cards/course-mid-card";
import { ContentBar } from "./content/content-bar";
import { ContentBody } from "./content/content-body";
import { BlogFullCard } from "../blog-page/cards/blog-full-card";

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
  FullCard: typeof CourseFullCard | typeof BlogFullCard;
};

const ListContent = ({ className, sortOptions, lang, FullCard }: ListContentProps) => {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className={cn("flex w-[80%] flex-col gap-3", className)}>
      <ContentBar
        sortOptions={sortOptions}
        lang={lang}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ContentBody lang={lang} selectedOption={selectedOption} FullCard={FullCard} />
    </div>
  );
};

export { ListPage, ListTitle, ListSideBar, ListContent };

"use client";

import { useState } from "react";

import { ContentBar } from "@/components/pages/list-page/content/content-bar";
import { ContentBody } from "@/components/pages/list-page/content/content-body";

import { type switchedListStates } from "@/dict/list/list-grid-switch.dict";
import { type SortOptionProps } from "@/dict/list/list-options.dict";

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
  sortOptions: SortOptionProps[];
  lang: Locale;
  FullCard: unknown;
  MidCard: unknown;
  data: unknown;
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

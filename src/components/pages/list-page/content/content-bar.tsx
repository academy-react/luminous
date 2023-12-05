"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  gridListSwitcherDict,
  type SortTypeStates,
  type SortOptionDictProps,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type ContentBarProps = {
  sortOptions: SortOptionDictProps[];
  lang: Locale;
  selectedOption: { col: string; type: SortTypeStates };
  switchedList: SwitchedListStates;
};
export const ContentBar = ({
  lang,
  sortOptions,
  selectedOption,
  switchedList,
}: ContentBarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSortClick = (value: { col: string; type: SortTypeStates }) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value.col);
    params.set("order", value.type);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleViewClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("view", value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
        <ul className="flex items-center gap-4">
          {sortOptions.map((item, index) => (
            <li
              key={index}
              className={cn(
                " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
                selectedOption.col === item.option.col &&
                  selectedOption.type === item.option.type &&
                  "text-purple-primary"
              )}
              onClick={() => handleSortClick(item.option)}
            >
              {item.title[lang]}
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-4">
          {gridListSwitcherDict.map((item) => {
            return (
              <li
                key={item.id}
                className={cn(
                  " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
                  item.name === switchedList ? "text-primary" : "text-[#555]"
                )}
                onClick={() => handleViewClick(item.name)}
              >
                <item.Icon />
              </li>
            );
          })}
          {/* {gridListSwitcher.map((Icon, id) => {
          const view = id === 1 ? "grid" : "list";
          return (
            <li
              key={id}
              className={cn(
                " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
                view === switchedList ? "text-purple-primary" : "text-[#555]"
              )}
              onClick={() => setSwitchedList(view)}
            >
              <Icon.Icon />
            </li>
          );
        })} */}
        </ul>
      </div>
    </>
  );
};

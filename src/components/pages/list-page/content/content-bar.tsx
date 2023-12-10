"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/elements/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/elements/ui/dropdown-menu";
import { Icons } from "@/components/assets/icons";

import {
  gridListSwitcherDict,
  SortSelectOptionDictProps,
  type SortOptionDictProps,
  type SortTypeStates,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type ContentBarProps = {
  sortOptions: SortOptionDictProps[];
  sortDateOption: SortSelectOptionDictProps[];
  sortPriceOption: SortSelectOptionDictProps[];
  lang: Locale;
  selectedOption: { col: string; type: SortTypeStates };
  switchedList: SwitchedListStates;
};
export const ContentBar = ({
  lang,
  sortOptions,
  sortDateOption,
  sortPriceOption,
  selectedOption,
  switchedList,
}: ContentBarProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSortClick = (value: { col: string; type: SortTypeStates }) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", value.col);
    params.set("order", value.type);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleViewClick = (value: string) => {
    const params = new URLSearchParams(searchParams);

    params.set("view", value);
    startTransition(() => router.push(`${pathname}?${params.toString()}`));
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            {sortOptions.map((option, index) => (
              <DropdownMenuTrigger
                key={index}
                className="cursor-pointer hover:text-primary focus:border-b-2 focus:border-primary focus:text-primary"
                asChild
              >
                <Button
                  aria-label="Sort products"
                  size="sm"
                  disabled={isPending}
                >
                  {option.title[lang]}
                  <Icons.downArrow
                    className="ml-2 h-4 w-4"
                    aria-hidden="true"
                  />
                </Button>
              </DropdownMenuTrigger>
            ))}
            {sortOptions[1] &&
              sortDateOption.map((dateOption, index) => (
                <DropdownMenuContent>
                  <DropdownMenuItem
                    key={index}
                    className={cn(
                      " cursor-pointer hover:text-primary focus:text-primary",
                      selectedOption.col === dateOption.option.col &&
                        selectedOption.type === dateOption.option.type &&
                        "text-primary"
                    )}
                    onClick={() => handleSortClick(dateOption.option)}
                  >
                    {dateOption.title[lang]}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              ))}
            {sortOptions[2] &&
              sortPriceOption.map((priceOption, index) => (
                <DropdownMenuContent>
                  <DropdownMenuItem
                    key={index}
                    className={cn(
                      " cursor-pointer hover:text-primary focus:text-primary",
                      selectedOption.col === priceOption.option.col &&
                        selectedOption.type === priceOption.option.type &&
                        "text-primary"
                    )}
                    onClick={() => handleSortClick(priceOption.option)}
                  >
                    {priceOption.title[lang]}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              ))}
          </DropdownMenu>
        </div>

        {/* <ul className="flex items-center gap-4">
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
        </ul> */}

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

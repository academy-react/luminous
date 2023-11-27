'use client';

import {
  gridListSwitcherDict,
  type SortOptionDictProps,
  type SwitchedListStates,
} from "@/dict/pages/list.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ContentBarProps = {
  sortOptions: SortOptionDictProps[];
  lang: Locale;
  selectedOption: number;
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
  
  const handleSortClick = (value:string  ) => {
    const params = new URLSearchParams(searchParams);

    params.set('sort', value);
    router.push(`${pathname}?${params}`);
   };

   const handleViewClick = (value: string  ) => {
    const params = new URLSearchParams(searchParams);

    params.set('view',value )
    router.push(`${pathname}?${params}`);
   };

  return (
    <>
    <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
      <ul className="flex items-center gap-4">
        {sortOptions.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
              selectedOption === index && "text-purple-primary"
            )}
            onClick={() => handleSortClick(String(index ))}
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
                item.name === switchedList
                  ? "text-primary"
                  : "text-[#555]"
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

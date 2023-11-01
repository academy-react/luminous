import {
  gridListSwitcher,
  type switchedListStates,
} from "@/dict/list/list-grid-switch.dict";
import { type SortOptionProps } from "@/dict/list/list-options.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type ContentBarProps = {
  sortOptions: SortOptionProps[];
  lang: Locale;
  selectedOption: number;
  setSelectedOption: (option: number) => void;
  switchedList: switchedListStates;
  setSwitchedList: (option: "grid" | "list") => void;
};
export const ContentBar = ({
  lang,
  sortOptions,
  setSelectedOption,
  selectedOption,
  switchedList,
  setSwitchedList,
}: ContentBarProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-card p-4  shadow">
      <ul className="flex items-center gap-4">
        {sortOptions.map((item, index) => (
          <li
            key={item.id}
            className={cn(
              " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
              selectedOption === index && "text-purple-primary"
            )}
            onClick={() => setSelectedOption(index)}
          >
            {item.title[lang]}
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4">
        {gridListSwitcher.map((item) => {
          return (
            <li
              key={item.id}
              className={cn(
                " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
                item.name === switchedList
                  ? "text-purple-primary"
                  : "text-[#555]"
              )}
              onClick={() => setSwitchedList(item.name)}
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
  );
};

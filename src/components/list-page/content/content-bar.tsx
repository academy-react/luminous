import { cn } from "@/lib/utils";
import { type SortOptionProps } from "@/dict/list/list-options.dict";

import { type Locale } from "#/i18n.config";
import { gridListSwitcher } from "@/dict/list/list-grid-switch.dict";
import { switchedListStates } from "../list-page";

type ContentBarProps = {
  sortOptions: SortOptionProps[];
  lang: Locale;
  selectedOption: number;
  setSelectedOption: (option: number) => void;
  switchedList: switchedListStates;
};
export const ContentBar = ({
  lang,
  sortOptions,
  setSelectedOption,
  selectedOption,
  switchedList,
}: ContentBarProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl p-4 shadow">
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
        {gridListSwitcher.map((item)=>(
          <li key={item.id} className={cn(
            " cursor-pointer focus:border-b-2 focus:border-[#555] focus:text-[#555]",
            switchedList === "grid" && "text-purple-primary"
          )}>

            <item.Icon/></li>
        ))}
      </ul>
    </div>
  );
};

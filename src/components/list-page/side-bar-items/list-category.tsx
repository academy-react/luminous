"use client";

import { type FilterCategoryProps } from "@/dict/list/list-category.dict";

import { CheckboxGroup } from "@/components/ui/checkbox";
import { Checkboxbtn } from "@/components/common/checkbox-btn";

import { type Locale } from "#/i18n.config";

type ListCategoryProps = {
  lang: Locale;
  category: FilterCategoryProps[];
};
export const ListCategory = ({ lang, category }: ListCategoryProps) => {
  return (
    <CheckboxGroup className="flex w-full flex-col justify-start gap-4 rounded-xl p-4 text-base font-bold text-[#333] shadow">
      دسته بندی دوره ها
      {category.map((item) => (
        <Checkboxbtn
          key={item.id}
          id={item.id}
          title={item.title[lang]}
          className="flex flex-row  font-[#666] text-sm"
        />
      ))}
    </CheckboxGroup>
  );
};

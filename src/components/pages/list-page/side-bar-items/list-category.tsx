"use client";

import { Checkboxbtn } from "@/components/elements/common/checkbox-btn";

import { type FilterCategoryProps } from "@/dict/dev/list-category.dict";

import { type Locale } from "#/i18n.config";

type ListCategoryProps = {
  lang: Locale;
  category: FilterCategoryProps[];
};
export const ListCategory = ({ lang, category }: ListCategoryProps) => {
  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-base font-bold text-[#333] shadow">
      دسته بندی دوره ها
      {category.map((item) => (
        <Checkboxbtn
          key={item.id}
          id={item.id}
          title={item.title[lang]}
          className="flex flex-row  font-[#666] text-sm"
        />
      ))}
    </div>
  );
};

"use client";

import { courseCategory } from "@/dict/dev/course-list.dict";

import { CheckboxGroup } from "@/components/ui/checkbox";
import { Checkboxbtn } from "@/components/common/checkbox-btn";

import { type Locale } from "#/i18n.config";

export const FilterByCategory = ({ lang }: { lang: Locale }) => {
  return (
    <CheckboxGroup className="flex w-full flex-col justify-start gap-4 text-base font-bold">
      دسته بندی دوره ها
      {courseCategory.map((item) => (
        <Checkboxbtn
          key={item.id}
          id={item.id}
          title={item.title[lang]}
          className="flex flex-row  text-sm"
        />
      ))}
    </CheckboxGroup>
  );
};

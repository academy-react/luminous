"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Checkboxbtn } from "@/components/elements/common";

import { CourseCategoriesSchemaType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type ListCategoryProps = {
  lang: Locale;
  category: CourseCategoriesSchemaType;
};
export const ListCategory = ({ lang, category }: ListCategoryProps) => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const router = useRouter();
  // const params = new URLSearchParams(searchParams);
  // params.set(category.);

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-base font-bold text-[#333] shadow">
      دسته بندی دوره ها
      {category.map((item) => (
        <Checkboxbtn
          key={item.id}
          id={String(item.id)}
          title={item.techName}
          className="flex flex-row  font-[#666] text-sm"
        />
      ))}
    </div>
  );
};

"use client";

import { count } from "console";
import { useEffect, useId, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/elements/ui/checkbox";
import { Label } from "@/components/elements/ui/label";

import { type CourseCategoryListType } from "@/core/validators/api";
import { NewsListCategoriesListType } from "@/core/validators/api/news/get/news-list-categories-schema";

import { type Locale } from "#/i18n.config";

type ListCategoryProps = {
  lang: Locale;
  courseCategory: CourseCategoryListType;
  newsCategory: NewsListCategoriesListType;
};
export const ListCategory = ({
  lang,
  courseCategory,
  newsCategory,
}: ListCategoryProps) => {
  const id = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const techIds = searchParams.get("tech");

  const [categoryIds, setCategoryIds] = useState<number[] | []>(
    techIds ? techIds?.split(",").map(Number) : []
  );
  const handleCheckedChenge = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("techIds", value.toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  {
    courseCategory &&
      useEffect(() => {
        const params = new URLSearchParams();
        categoryIds.length !== 0 &&
          params.set("techIds", categoryIds.join(","));
        router.push(`${pathname}?${params.toString()}`);
      }, [categoryIds]);
  }

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-base font-bold text-[#333] shadow">
      {courseCategory
        ? { fa: "دسته بندی دوره ها", en: "Course Category" }[lang]
        : { fa: "دسته بندی اخبار", en: "News Category" }[lang]}

      {courseCategory &&
        courseCategory.map((item) => (
          <div key={item.id} className="flex flex-row  font-[#666] text-sm">
            <Checkbox
              id={`${id}-category${item.id}`}
              checked={categoryIds?.includes(item.id) ?? false}
              onCheckedChange={(value) => {
                if (value) {
                  setCategoryIds([...(categoryIds ?? []), item.id]);
                } else {
                  setCategoryIds(
                    categoryIds?.filter((id) => id !== item.id) ?? null
                  );
                }
              }}
            />
            <Label
              htmlFor={`${id}-category${item.id}`}
              className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.techName}
            </Label>
          </div>
        ))}
      {newsCategory &&
        newsCategory.map((item) => (
          <div key={item.id} className="flex flex-row  font-[#666] text-sm">
            <Checkbox
              id={`${id}-category${item.id}`}
              checked={item.id === techIds}
              onCheckedChange={() => {
                handleCheckedChenge(item.id);
              }}
            />
            <Label
              htmlFor={`${id}-category${item.id}`}
              className="mr-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.categoryName}
            </Label>
          </div>
        ))}
    </div>
  );
};

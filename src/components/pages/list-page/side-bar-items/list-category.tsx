"use client";

import { useEffect, useId, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Checkbox } from "@/components/elements/ui/checkbox";
import { Label } from "@/components/elements/ui/label";

import { type CourseCategoryListType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

type ListCategoryProps = {
  lang: Locale;
  category: CourseCategoryListType;
};
export const ListCategory = ({ lang, category }: ListCategoryProps) => {
  const id = useId();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const techIds = searchParams.get("tech");

  const [categoryIds, setCategoryIds] = useState<number[] | []>(
    techIds ? techIds?.split(",").map(Number) : []
  );

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("techIds", categoryIds.join(","));
    router.push(`${pathname}?${params.toString()}`);
  }, [categoryIds]);

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-base font-bold text-[#333] shadow">
      {{ fa: "دسته بندی دوره ها", en: "Course Category" }[lang]}
      {category.map((item) => (
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
    </div>
  );
};

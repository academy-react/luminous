"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CourseCategoriesSchemaType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";
import { Checkbox } from "@/components/elements/ui/checkbox";
import { Label } from "@/components/elements/ui/label";

type ListCategoryProps = {
  lang: Locale;
  category: CourseCategoriesSchemaType;
};
export const ListCategory = ({ lang, category }: ListCategoryProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const handelChek= (techName: string)=>{
    const params = new URLSearchParams(searchParams);
    params.set("tech",techName);
    router.push(`${pathname}?${params.toString()}`);
  }
  

  return (
    <div className="flex w-full  flex-col justify-start gap-4 rounded-xl bg-card p-4 text-base font-bold text-[#333] shadow">
      دسته بندی دوره ها
      {category.map((item) => (
        <div key={item.id} className="flex flex-row  font-[#666] text-sm">
        <Checkbox   
          id={String(item.id)} 
          onCheckedChange={()=>handelChek(item.techName)}/>
        <Label
          htmlFor={String(item.id)} 
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {item.techName}
        </Label>
      </div>
      ))}
    </div>
  );
};

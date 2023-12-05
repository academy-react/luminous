"use client";

import Image from "next/image";
import Link from "next/link";

import { type CourseFilterDtoType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/elements/ui";
import { cn } from "@/lib/utils";
import { courseFavoriteAction } from "@/core/actions";

export type CourseFullCardProps = {
  item: CourseFilterDtoType;
  lang: Locale;
};
export const CourseFullCard = ({
  item: { tumbImageAddress, title, describe, teacherName, courseId, courseRate, cost, technologyList, userFavorite },
  lang,
}: CourseFullCardProps) => {

  const favoriteAction = async()=>{
    const res = await courseFavoriteAction(courseId , lang);
    }
  return (
    <div className="flex h-[200px] w-full gap-3 rounded-xl bg-card px-4 py-3  shadow">
      <Link
        href={`/${lang}/courses/${courseId}`}
        className="relative basis-1/3 flex h-full w-full items-center justify-center bg-gray-200 rounded-xl"
      >
         <Icons.placeholder  className=" w-8 h-8 text-slate-600" />
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
      </Link>
      <div className=" basis-2/3">
      <div className="flex flex-row justify-between items-center">
        <div className="px-2 py-1 w-fit text-xs rounded-md bg-secondary text-primary">{technologyList}</div> 
      <Button className="" onClick={() => void favoriteAction()}>
          <Icons.heart
            className={cn(
              "h-6 w-6 text-slate-600 transition-all duration-500 hover:fill-slate-600",
              userFavorite && "fill-slate-600"
            )}
          />
        </Button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[#333]">{title}</h2>
            <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
              {describe}
            </p>
          </div>
          
        </div>
        <div className="mt-6 flex items-end justify-between">
          <ul className="flex gap-4 text-xs  text-[#505050] items-center">
            <li>مدرس:{teacherName}</li>
            <li>مدت زمان دوره:80ساعت</li>
            <div className="text-yellow-500 text-sm flex  items-center" >
              <span className=" text-2xl text-yellow-500 ">★</span>
              {courseRate}
              
            </div>
          </ul>

          <div className="text-3xl rounded-xl  text-[#58AD57] flex flex-row items-center gap-2 ">
              <span>{cost.toLocaleString(lang)}</span>
              <Icons.toman className="h-5 w-5"/>
              
          </div>
        </div>
      </div>
    </div>
  );
};

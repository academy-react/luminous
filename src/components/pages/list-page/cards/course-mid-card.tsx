"use client";

import Image from "next/image";
import Link from "next/link";

import { type CourseFilterDtoType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/elements/ui";
import { courseFavoriteAction } from "@/core/actions";
import { cn } from "@/lib/utils";

export type CourseMidCardProps = {
  item: CourseFilterDtoType;
  lang: Locale;
};
export const CourseMidCard = ({
  item: { tumbImageAddress, title, teacherName, courseId , cost, courseRate, technologyList, userFavorite},
  lang,
}: CourseMidCardProps) => {

const favoriteAction = async()=>{
const res = await courseFavoriteAction(courseId , lang);
}
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2  shadow-lg">
      <Link
        href={`/${lang}/courses/${courseId}`}
        className="relative flex h-full w-full items-center justify-center bg-gray-200 rounded-xl
        // aspect-[3/2]
          "
      >
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
        <Icons.placeholder  className=" w-8 h-8 text-slate-600" />
      </Link>
      <div className=" flex flex-col gap-4 ">
      
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
        
        <h2 className="text-xl font-semibold ">{title}</h2>
        <div className="flex flex-col gap-y-4 rounded-xl">
          <div>{teacherName}</div>
          <ul className="flex justify-between ">

            <li className="text-yellow-500 text-base ">
              <Icons.starFilled className=" text-xl "/>
              {courseRate}
            </li>
            <li className="text-3xl rounded-xl  text-[#58AD57] flex flex-row items-center gap-2 ">
              <span>{cost.toLocaleString(lang)}</span>
              <Icons.toman className="h-5 w-5"/>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

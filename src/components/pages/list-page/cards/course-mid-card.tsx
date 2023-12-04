"use client";

import Image from "next/image";
import Link from "next/link";

import { type CourseFilterDtoType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

import { Rating } from "./ratting";

export type CourseMidCardProps = {
  item: CourseFilterDtoType;
  lang: Locale;
};
export const CourseMidCard = ({
  item: {
    tumbImageAddress,
    title,
    teacherName,
    courseId,
    cost,
    courseRate,
    technologyList,
  },
  lang,
}: CourseMidCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2  shadow-lg">
      <Link
        href={`/${lang}/courses/${courseId}`}
        className="relative aspect-[3/2]  "
      >
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
      </Link>
      <div className=" flex flex-col gap-4 ">
        {/* const [categoryIds, setCategoryIds] = useState<number[] | []>(
        technologyList.split(",").map(Number) : []
  )
      {categoryId.map((i)=>{
              <div className="px-2 py-1 w-fit text-sm rounded-md bg-secondary text-primary">#</div>
      })} */}
        <div className="w-fit rounded-md bg-accent px-2 py-1 text-xs text-primary">
          #{technologyList}
        </div>
        <h2 className="text-xl font-semibold ">{title}</h2>
        <div className="flex flex-col gap-y-4 rounded-xl">
          <div>{teacherName}</div>
          <ul className="flex justify-between ">
            <li className="text-yellow-500">
              <span className="text-xl text-yellow-500 ">★</span>
              {courseRate}
            </li>
            <li className="rounded-xl text-base  text-[#58AD57] ">
              {cost.toLocaleString(lang)}تومان
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

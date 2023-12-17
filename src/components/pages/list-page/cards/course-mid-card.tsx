"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { courseFavoriteAction } from "@/core/actions";
import { type CourseFilterDtoType } from "@/core/validators/api";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

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
    userFavorite,
  },
  lang,
}: CourseMidCardProps) => {
  const favoriteAction = async () => {
    const res = await courseFavoriteAction(courseId, lang);
  };
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2  shadow-lg">
      <Link
        href={`/${lang}/courses/${courseId}`}
        className="// relative flex aspect-[3/2] h-full w-full items-center justify-center
        rounded-xl bg-gray-200
          "
      >
        <Icons.placeholder className=" h-8 w-8 text-slate-600" />
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
      </Link>
      <div className=" flex flex-col gap-4 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row flex-wrap gap-2">
            {technologyList.split(",").map((tech, index) => (
              <div
                key={index}
                className="w-fit rounded-md bg-secondary px-2 py-1 text-xs text-primary"
              >
                {tech}
              </div>
            ))}
          </div>
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
            <li className="flex flex-row items-center text-base text-yellow-500">
              <span className=" text-3xl text-yellow-500 ">★</span>
              <span>{courseRate}</span>
            </li>
            <li className="flex flex-row  items-center gap-2 rounded-xl text-2xl text-[#58AD57] ">
              <span>{cost.toLocaleString(lang)}</span>
              <Icons.toman className="h-5 w-5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

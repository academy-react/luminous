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
  item: { tumbImageAddress, title, teacherName },
  lang,
}: CourseMidCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2  shadow-lg">
      <Link href="#" className="relative aspect-[3/2]  ">
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
      </Link>
      <div className=" flex flex-col gap-4 ">
        <h2 className="text-xl font-semibold ">{title}</h2>
        <div className="flex flex-col gap-y-4 rounded-xl">
          <div>{teacherName}</div>
          <ul className="flex justify-between ">
            <li>
              <Rating />
            </li>
            <li className="text-md rounded-xl  text-[#58AD57] ">
              8500000تومان
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

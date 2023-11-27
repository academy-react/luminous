"use client";

import Image from "next/image";
import Link from "next/link";

import { CourseFilterDtoType } from "@/core/validators/api";

import { type Locale } from "#/i18n.config";

import { Rating } from "./ratting";

export type CourseFullCardProps = {
  item: CourseFilterDtoType;
  item: CourseFilterDtoType;
  lang: Locale;
};
export const CourseFullCard = ({
  item: { tumbImageAddress, title, describe, teacherName, courseId },
  lang,
}: CourseFullCardProps) => {
  return (
    <div className="flex h-[170px] w-full gap-3 rounded-xl bg-card px-4 py-3  shadow">
      <Link
        href={`/${lang}/courses/${courseId}`}
        className="relative aspect-[2/1] basis-1/3 "
      >
        {/* <Image src={tumbImageAddress} alt="" fill className="rounded-xl object-cover" /> */}
      </Link>
      <div className=" basis-2/3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[#333]">{title}</h2>
            <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
              {describe}
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <ul className="flex gap-4 text-xs  text-[#505050] ">
            <li>مدرس:{teacherName}</li>
            <li>مدت زمان دوره:80ساعت</li>
            <li>
              <Rating id={courseId} />
            </li>
          </ul>

          <span className="text-md rounded-xl px-1 text-[#58AD57]">
            8500000تومان
          </span>
        </div>
      </div>
    </div>
  );
};

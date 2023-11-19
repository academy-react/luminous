"use client";

import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

import { Rating } from "./ratting";

export type CourseFullCardProps = {
  item: {
    image: string;
    title: { [key in Locale]: string };
    description: { [key in Locale]: string };
    teacher: { [key in Locale]: string };
  };
  lang: Locale;
};
export const CourseFullCard = ({
  item: { image, title, description, teacher },
  lang,
}: CourseFullCardProps) => {
  return (
    <div className="flex h-[170px] w-full gap-3 rounded-xl bg-card px-4 py-3  shadow">
      <Link href="#" className="relative aspect-[2/1] basis-1/3 ">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className=" basis-2/3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold text-[#333]">{title[lang]}</h2>
            <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
              {description[lang]}
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <ul className="flex gap-4 text-xs  text-[#505050] ">
            <li>مدرس:{teacher[lang]}</li>
            <li>مدت زمان دوره:80ساعت</li>
            <li>
              <Rating />
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

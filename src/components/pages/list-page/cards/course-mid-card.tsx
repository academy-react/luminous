"use client";

import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

import { Rating } from "./ratting";

export type CourseMidCardProps = {
  item: {
    image: string;
    title: { [key in Locale]: string };
    teacher: { [key in Locale]: string };
  };
  lang: Locale;
};
export const CourseMidCard = ({
  item: { image, title, teacher },
  lang,
}: CourseMidCardProps) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl bg-card px-4 py-2  shadow-lg">
      <Link href="#" className="relative aspect-[3/2]  ">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className=" flex flex-col gap-4 ">
        <h2 className="text-xl font-semibold ">{title[lang]}</h2>
        <div className="flex flex-col rounded-xl gap-y-4">
          <div>{teacher[lang]}</div>
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

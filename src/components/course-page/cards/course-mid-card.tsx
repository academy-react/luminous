"use client";

import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

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
    <div className="flex w-full flex-col gap-2 rounded-xl px-4 py-2 shadow-lg">
      <Link href="#" className="relative aspect-[3/2]  ">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className=" flex flex-col gap-4 ">
        <h2 className="text-xl font-semibold ">{title[lang]}</h2>
        <div className="flex justify-between rounded-xl">
          <ul className="flex flex-col justify-start">
            <li>{teacher[lang]}</li>
            <li>*****</li>
            <li className="rounded-xl border-2 border-[#58AD57]  px-2  text-[#58AD57] ">
              8500000تومان
            </li>
          </ul>
          <ul className="flex  flex-col rounded-xl px-2 shadow-lg">
            <li className="">1</li>
            <li className=" ">20</li>
            <li className="">30</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

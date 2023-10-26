import Image from "next/image";
import Link from "next/link";

import {type Locale } from "#/i18n.config";

type CourseFullCardProps = {
  image: string;
  title: { [key in Locale]: string };
  description: { [key in Locale]: string };
  teacher: { [key in Locale]: string };
};
export const CourseFullCard = (
  { image, title, description, teacher }: CourseFullCardProps,
  { lang }: { lang: Locale }
) => {
  return (
    <div className="flex w-full  gap-4 rounded-xl p-4 shadow-lg">
      <Link href="#" className="relative aspect-[2/1] basis-1/3 ">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className=" basis-2/3">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold">{title[lang]}</h2>
            <p className="w-[70%] text-base text-[#707070]">
              {description[lang]}
            </p>
          </div>
          <ul className="flex flex-col  rounded-xl px-2 shadow-lg">
            <li className="">1</li>
            <li className=" ">20</li>
            <li className="">30</li>
          </ul>
        </div>
        <div className="flex items-end  justify-between">
          <ul className="flex gap-4">
            <li>مدرس:{teacher[lang]}</li>
            <li>مدت زمان دوره:80ساعت</li>
            <li>*****</li>
          </ul>

          <span className="rounded-xl border-2 border-[#58AD57]  px-2  text-[#58AD57] ">
            8500000تومان
          </span>
        </div>
      </div>
    </div>
  );
};

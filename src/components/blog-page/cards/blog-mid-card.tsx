import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

export type BlogMidCardProps = {
  item: {
    image: string;
    title: { [key in Locale]: string };
    description: { [key in Locale]: string };
    category: { [key in Locale]: string };
  };
  lang: Locale;
};
export const BlogMidCard = ({
  item: { image, title, description, category },
  lang,
}: BlogMidCardProps) => {
  return (
    <div className="flex w-full gap-3 rounded-xl px-4 py-3 shadow">
      <Link href="#" className="relative aspect-[3/2]">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className="">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold text-[#333]">{title[lang]}</h2>
          <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
            {description[lang]}
          </p>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <span className="rounded-xl border-2 border-[#58AD57] px-1 text-sm text-[#58AD57]">
            {category[lang]}
          </span>
          <Link
            href="#"
            className="border-purple-primary text-sm text-purple-primary"
          >
            {lang === "fa" ? "ادامه مطلب" : "more"}
          </Link>
        </div>
      </div>
    </div>
  );
};

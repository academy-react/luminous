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
    <div className="flex w-full flex-col gap-2 rounded-xl px-4 py-2 shadow">
      <Link href="#" className="relative aspect-[3/2]">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-xl font-semibold text-[#333]">{title[lang]}</h2>
        <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
          {description[lang]}
        </p>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <span className="text-sm text-[#5555]">#{category[lang]}</span>
        <Link
          href="#"
          className="rounded-xl border border-purple-primary p-1 text-sm text-purple-primary"
        >
          {lang === "fa" ? "ادامه مطلب" : "more"}
        </Link>
      </div>
    </div>
  );
};

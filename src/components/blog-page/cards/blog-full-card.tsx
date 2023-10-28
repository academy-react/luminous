import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

type BlogFullCardProps = {
  item: {
    image: string;
    title: { [key in Locale]: string };
    description: { [key in Locale]: string };
    category: { [key in Locale]: string };
  };
  lang: Locale;
};
export const BlogFullCard = ({
  item: { image, title, description, category },
  lang,
}: BlogFullCardProps) => {
  return (
    <div className="flex h-[170px] w-full gap-3 rounded-xl px-4 py-3 shadow">
      <Link href="#" className="relative aspect-[2/1] basis-1/3 ">
        <Image src={image} alt="" fill className="rounded-xl object-cover" />
      </Link>
      <div className=" basis-2/3">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-bold text-[#333]">{title[lang]}</h2>
          <p className="line-clamp-2 w-[80%] text-sm text-[#666] ">
            {description[lang]}
          </p>
        </div>
        <div className="mt-10 flex items-end justify-between">
          <span className=" text-sm text-[#555]"># {category[lang]}</span>
          <Link
            href="#"
            className="rounded-xl border border-purple-primary p-1 text-sm text-purple-primary"
          >
            {lang === "fa" ? "ادامه مطلب" : "more"}
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";

import { type Locale } from "#/i18n.config";

const HeroSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="relative h-full w-full">
      <div className="relative -z-10 aspect-[2/1] w-full overflow-hidden">
        <Image
          alt="hero-bg"
          src="/images/artworks/hero-bg.svg"
          fill
          className="scale-110 object-cover"
        />
      </div>
      <div className="absolute start-0 top-0">
        <div className="flex flex-col gap-4 ps-10 pt-20 lg:ps-20 lg:pt-32">
          <h1 className="w-fit text-4xl font-black">پژهشگاه سپهر</h1>
          <p className="w-96 text-lg font-medium">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذش سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <button className="w-40 rounded-xl border bg-gradient-to-r from-purple-primary to-purple-secondary px-2 py-1 font-bold text-white transition-all hover:border-2 hover:border-purple-primary hover:from-transparent hover:text-purple-primary">
            {
              {
                fa: "شروع یادگیری",
                en: "Start Learning",
              }[lang]
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

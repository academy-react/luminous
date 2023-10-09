import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import Button from "@/components/common/button";

const Hero = () => {
  return (
    <>
      <div className=" relative top-[-150px] -z-10 aspect-[2/1] h-[650px] w-full cursor-pointer border border-red-500 md:h-[884px] xl:h-[950px] 2xl:h-[1050px]">
        <Image
          alt="picture"
          src="/images/heroBg.svg"
          fill
          className={cn(" hidden object-cover md:block")}
        />
        <Image
          alt="picture"
          src="/images/heroBgMobile.svg"
          fill
          className={cn(" block p-10 md:hidden")}
        />
        <div className="absolute right-20 top-36 md:top-60 ">
          <h1 className="text-3xl font-bold">پژهشگاه سپهر</h1>
          <p className="mb-5 mt-4 line-clamp-2 w-5/12 text-lg font-medium md:line-clamp-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذش سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <Button
            style={
              "bg-gradient-to-r from-purple-primary to-purple-secondary text-white-primary transition-all hover:border-2 hover:border-purple-primary hover:from-transparent hover:text-purple-primary"
            }
            href={"#"}
            title={"شروع یادگیری"}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

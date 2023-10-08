import React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import Button from "@/components/common/button";

const Hero = () => {
  return (
    <>
      <div className="] relative -top-[100px]  aspect-[2/1] h-[110vh] w-full cursor-pointer border border-red-500 ">
        <Image
          alt="picture"
          src="/images/heroBg.svg"
          fill
          className={cn(" object-cover")}
        />
        <div className="absolute right-20 top-60 ">
          <h1 className="text-3xl font-bold">پژهشگاه سپهر</h1>
          <p className="mb-5 mt-4 line-clamp-2 w-5/12 text-lg font-medium md:line-clamp-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذش سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <Button
            style={
              "bg-gradient-to-r from-purple-primary to-pink-primary  text-white-primary transition-all hover:border-2 hover:border-purple-primary hover:from-transparent hover:text-purple-primary"
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

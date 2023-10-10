import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <>
      {/* footer background */}
      <div className="relative  aspect-[7/1]  w-full">
        <Image
          src="/images/footerBg.svg"
          fill
          alt="picture"
          className={cn("object-cover")}
        />
      </div>
      {/* footer section */}
      <div className=" flex w-full flex-col md:flex-row ">
        {/*  phone numbers-links */}
        <div className=" mx-auto mb-10 mt-4   md:mb-28 md:flex md:gap-10">
          <div className="mx-auto mt-4 flex  justify-center ">
            <ul className="flex flex-row text-base font-bold md:flex-col md:text-lg ">
              <li>
                <Link
                  href="#"
                  className="dark:text-white dark:hover:text-white block  pl-3 pr-4  text-gray-900 hover:text-gray-100  md:p-0 "
                >
                  بلاگ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-white dark:hover:text-white block  pl-3 pr-4  text-gray-900 hover:text-gray-100  md:p-0 "
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-white dark:hover:text-white block  pl-3 pr-4  text-gray-900 hover:text-gray-100  md:p-0 "
                >
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-white dark:hover:text-white block  pl-3 pr-4  text-gray-900 hover:text-gray-100  md:p-0 "
                >
                  همکاری با ما
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="dark:text-white dark:hover:text-white block  pl-3 pr-4  text-gray-900 hover:text-gray-100  md:p-0 "
                >
                  سوالات متداول
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex  justify-center pt-4">
            <ul className="flex flex-row md:flex-col">
              <li className=" text-lg font-bold">شماره های تماس:</li>
              <li className=" text-base font-bold">09110000000</li>
              <li className=" text-base font-bold">09120000000</li>
            </ul>
          </div>
        </div>
        {/*icons */}
        <div className="md:flex md:flex-col md:justify-center">
          <div className="flex flex-row items-center   justify-center  gap-3">
            <Link href="#">
              <Image
                src="/images/facebook.svg"
                alt="picture"
                width={30}
                height={30}
                className={cn(
                  "object-cover transition-all duration-300"
                  //    , shownImage === image ? "opacity-100" : "opacity-50"
                )}
              ></Image>
            </Link>
            <Link href="#">
              <Image
                src="/images/youtube.svg"
                alt="picture"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="#">
              <Image
                src="/images/twitter.svg"
                alt="picture"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="#">
              <Image
                src="/images/telegram.svg"
                alt="picture"
                width={30}
                height={30}
              ></Image>
            </Link>
          </div>
          <p className="text-purple mt-2  hidden text-lg font-bold md:flex">
            ما را در شبکه های اجتماعی دنبال کنید
          </p>
        </div>

        {/* enamads */}
        <div className="mx-auto flex items-center justify-center gap-3 pb-4 pt-6 md:gap-0 md:pb-4 md:pt-0 ">
          <div className="">
            <Image
              src="/images/enamad.svg"
              alt="picture"
              width={160}
              height={160}
              // className="md:w-[300px] md:h-[300px] md:-ml-14 "
            />
          </div>
          <div>
            <Image
              src="/images/enamad2.svg"
              alt="picture"
              width={100}
              height={100}
              // className="md:w-[180px] md:h-[180px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

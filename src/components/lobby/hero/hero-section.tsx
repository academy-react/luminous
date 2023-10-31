import React from "react";
import Image from "next/image";

import { heroDict } from "@/dict/lobby/hero.dict";

import { type Locale } from "#/i18n.config";

export const HeroSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="container relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden lg:h-screen">
      <div className="container relative -top-10 z-10 mx-auto flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
        <div className="flex flex-col items-center gap-7 px-4 lg:items-start">
          <h1 className="text-center text-5xl font-black lg:text-start lg:text-6xl">
            {heroDict.title[lang]}
          </h1>
          <p className="max-w-xl text-center text-lg font-medium text-gray-600 dark:text-gray-400 lg:text-start">
            {heroDict.description[lang]}
          </p>
          <button className="group relative inline-flex w-fit items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent p-[4px] font-extrabold text-background transition-transform duration-300 hover:to-primary hover:text-primary focus:outline-none active:scale-90">
            <span className="relative rounded-lg px-9 py-2 transition-all duration-300 ease-in group-hover:bg-background">
              {heroDict.button[lang]}
            </span>
          </button>
        </div>
        <div className="relative aspect-[1.5/1] h-64 sm:h-80 xl:h-96">
          <Image
            src="/images/artworks/hero-bg-mobile.svg"
            fill
            priority
            quality={100}
            alt="hero-section"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

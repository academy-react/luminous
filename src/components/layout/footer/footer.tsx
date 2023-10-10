import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  footerMenuOptions,
  footerSocialMediaOptions,
} from "@/dict/lobby/footer.dict";

import { type Locale } from "#/i18n.config";

const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <>
      {/* footer background */}
      <div className="relative aspect-[7/1] w-full">
        <Image
          src="/images/artworks/footer-art.svg"
          fill
          alt="footer-art"
          className="object-cover"
        />
      </div>
      {/* Footer Section */}
      <footer className="flex w-full items-center justify-between pb-16">
        {/* Info Area */}
        <div className="flex w-[40%] gap-16 ps-20">
          {/* Nav Bar */}
          <ul
            className={cn(
              "flex flex-col font-bold",
              lang === "en" ? "" : "md:text-lg"
            )}
          >
            {footerMenuOptions.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-gray-100">
                  {item.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
          {/* Phone Numbers */}
          <div className="flex flex-col gap-3">
            <div className={cn("font-bold", lang === "en" ? "" : "md:text-lg")}>
              {
                {
                  fa: "شماره های تماس:",
                  en: "Phone numbers:",
                }[lang]
              }
            </div>
            <ul className="flex flex-col gap-1">
              <li className="font-bold">09110000000</li>
              <li className="font-bold">09120000000</li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex w-[20%] flex-col items-center justify-center gap-2">
          <div className="flex w-fit items-center gap-4">
            {footerSocialMediaOptions.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-3xl text-purple-primary"
              >
                <item.icon />
              </Link>
            ))}
          </div>
          <p className="hidden w-fit text-lg font-bold text-purple-primary md:block">
            {
              {
                fa: "ما را در شبکه‌های اجتماعی دنبال کنید",
                en: "Follow Us on Social Medias",
              }[lang]
            }
          </p>
        </div>
        {/* Trust Badges */}
        <div className="flex w-[40%] items-center justify-end pe-20">
          <div className="relative aspect-square h-20">
            <Image
              src="/images/trust/E-Namad.png"
              alt="e-namad"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-square h-20">
            <Image
              src="/images/trust/Sabt.webp"
              alt="sabt"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

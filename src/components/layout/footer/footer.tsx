import React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  footerMenuOptions,
  footerSocialMediaOptions,
} from "@/dict/lobby/footer.dict";

import { type Locale } from "#/i18n.config";

export const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <div className="mt-28">
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
      <footer className="grid w-full grid-rows-3 place-content-center lg:grid-cols-3 lg:grid-rows-1">
        {/* Info Area */}
        <div className="flex items-start justify-center gap-6">
          {/* Nav Bar */}
          <ul
            className={cn(
              "flex flex-col gap-1.5 font-bold",
              lang === "en" ? "" : "text-xl md:text-lg"
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
          <div className="flex flex-col items-end gap-3 lg:items-start">
            <div
              className={cn(
                "font-bold",
                lang === "en" ? "" : "text-xl md:text-lg"
              )}
            >
              {
                {
                  fa: "شماره های تماس",
                  en: "Phone numbers",
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
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex w-fit items-center gap-4">
            {footerSocialMediaOptions.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-5xl text-purple-primary lg:text-3xl"
              >
                <item.icon />
              </Link>
            ))}
          </div>
          <p className="w-fit text-xl font-bold text-purple-primary lg:text-lg">
            {
              {
                fa: "ما را در شبکه‌های اجتماعی دنبال کنید",
                en: "Follow Us on Social Medias",
              }[lang]
            }
          </p>
        </div>
        {/* Trust Badges */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square h-32">
            <Image
              src="/images/trust/E-Namad.png"
              alt="e-namad"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-square h-32">
            <Image
              src="/images/trust/Sabt.webp"
              alt="sabt"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

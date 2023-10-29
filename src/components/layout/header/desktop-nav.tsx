import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { headerMenuOptions } from "@/dict/lobby/header.dict";

import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

const mainNavTextVariants = cva(
  "text-lg font-extrabold decoration-1 underline-offset-[12px] capitalize",
  {
    variants: {
      textColorVariant: {
        default: "text-purple-text hover:text-purple-secondary",
        auth: "text-white hover:text-black",
      },
    },
    defaultVariants: {
      textColorVariant: "default",
    },
  }
);

const mainNavIconVariants = cva("h-10 w-10", {
  variants: {
    iconColorVariant: {
      default: "fill-purple-primary hover:fill-purple-secondary",
      auth: "fill-white hover:fill-black ",
    },
  },
  defaultVariants: {
    iconColorVariant: "default",
  },
});

export interface MainNavProps
  extends VariantProps<typeof mainNavTextVariants>,
    VariantProps<typeof mainNavIconVariants> {
  lang: Locale;
  className?: string;
}

export const MainNav = ({
  lang,
  className,
  textColorVariant,
  iconColorVariant,
}: MainNavProps) => {
  return (
    <nav className={cn("flex items-center gap-7", className)}>
      <Link aria-label="Home" href={`/${lang}`}>
        <Icons.logo
          className={cn(
            mainNavIconVariants({ iconColorVariant, className }),
            "transition-all duration-500"
          )}
        />
      </Link>
      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex gap-6 lg:gap-10">
          {headerMenuOptions.map((item) => (
            <li key={item.id}>
              <Link
                href={`/${lang}/${item.href}`}
                className={cn(
                  mainNavTextVariants({ textColorVariant, className }),
                  "transition-all duration-500"
                )}
              >
                {item.title[lang]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export const AuthNav = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="flex flex-1 items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn p-1.5 text-purple-text transition duration-500 hover:bg-white">
          <Icons.search />
        </div>
        <div className="flex h-full gap-2 font-semibold">
          <Link
            href={`/${lang}/sign-up`}
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn px-7 py-1.5 text-center text-purple-text transition duration-500 hover:bg-white"
          >
            {{ fa: "ثبت‌نام", en: "Sign Up" }[lang]}
          </Link>
          <Link
            href={`/${lang}/sign-in`}
            className="flex h-full items-center justify-center rounded-xl border-[3px] border-purple-btn bg-purple-btn px-7 py-1.5 text-center text-purple-text transition duration-500 hover:bg-transparent"
          >
            {{ fa: "ورود", en: "Sign In" }[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
};

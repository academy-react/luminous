import Link from "next/link";

import { cva, type VariantProps } from "class-variance-authority";

import { Icons } from "@/components/assets/icons";

import { headerMenuOptionsDict } from "@/dict/layouts/root.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

const mainNavTextVariants = cva(
  "text-lg font-extrabold decoration-1 underline-offset-[12px] capitalize",
  {
    variants: {
      textColorVariant: {
        default: "text-primary hover:text-accent",
        auth: "text-white hover:text-black",
      },
    },
    defaultVariants: {
      textColorVariant: "default",
    },
  }
);

const mainNavIconVariants = cva("", {
  variants: {
    iconColorVariant: {
      default: "fill-primary hover:fill-accent",
      auth: "fill-white hover:fill-black",
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
      <Link
        aria-label="Home"
        href={`/${lang}`}
        className={cn(
          mainNavIconVariants({ iconColorVariant, className }),
          "transition-all duration-500",
          "flex items-center gap-2"
        )}
      >
        <Icons.luminousLogo className="h-24 w-24" />
        <Icons.logo className="h-8 w-8" />
      </Link>
      <div className="hidden w-full md:block md:w-auto">
        <ul className="flex gap-4 lg:gap-8">
          {headerMenuOptionsDict.map((item) => (
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

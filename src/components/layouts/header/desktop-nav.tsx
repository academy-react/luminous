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

const mainNavIconVariants = cva("h-10 w-10", {
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
      <Link aria-label="Home" href={`/${lang}`}>
        <Icons.logo
          className={cn(
            mainNavIconVariants({ iconColorVariant, className }),
            "transition-all duration-500"
          )}
        />
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

export const AuthNav = ({ lang }: { lang: Locale }) => {
  return (
    <nav className="flex flex-1 items-center justify-end">
      <div className="hidden items-center gap-2 md:flex">
        <div className="flex aspect-square h-full cursor-pointer items-center justify-center rounded-xl border-[3px] border-primary bg-primary p-1.5 text-secondary transition duration-500 hover:bg-transparent hover:text-primary">
          <Icons.search />
        </div>
        <div className="flex h-full gap-2 font-semibold">
          <LinkButton
            lang={lang}
            text={{ fa: "ثبت نام", en: "Sign Up" }}
            href="sign-up"
          />
          <LinkButton
            lang={lang}
            text={{ fa: "ورود", en: "Sign In" }}
            href="sign-in"
          />
        </div>
      </div>
    </nav>
  );
};

const LinkButton = ({
  lang,
  text,
  href,
}: {
  lang: Locale;
  text: {
    [key in Locale]: string;
  };
  href: string;
}) => {
  return (
    <Link
      href={`/${lang}/${href}`}
      className="flex h-full items-center justify-center rounded-xl border-[3px] border-primary bg-primary px-5 py-1.5 text-center text-secondary transition duration-500 hover:bg-transparent hover:text-primary"
    >
      {text[lang]}
    </Link>
  );
};

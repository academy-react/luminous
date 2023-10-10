interface TitleProps {
  fa: string;
  en: string;
}

export const title: TitleProps = {
  fa: "پروژه ری‌اکت تیم Luminous",
  en: "The Luminous Team React Project",
};

export interface HeaderMenuOptionProps {
  id: number;
  title: {
    en: string;
    fa: string;
  };
  href: string;
}

export const headerMenuOptions: HeaderMenuOptionProps[] = [
  {
    id: 1,
    title: {
      fa: "بلاگ",
      en: "Blog",
    },
    href: "",
  },
  {
    id: 2,
    title: {
      fa: "درباره‌ ما",
      en: "About Us",
    },
    href: "about",
  },
  {
    id: 3,
    title: {
      fa: "تماس با ما",
      en: "Contact Us",
    },
    href: "contact",
  },
  {
    id: 4,
    title: {
      fa: "همکاری با ما",
      en: "Join Us",
    },
    href: "join",
  },
  {
    id: 5,
    title: {
      fa: "سوالات متداول",
      en: "FAQ",
    },
    href: "faq",
  },
];

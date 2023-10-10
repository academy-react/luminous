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
      fa: "خانه",
      en: "Home",
    },
    href: "",
  },
  {
    id: 2,
    title: {
      fa: "دوره‌ها",
      en: "courses",
    },
    href: "courses",
  },
  {
    id: 3,
    title: {
      fa: "بلاگ",
      en: "blog",
    },
    href: "blog",
  },
  {
    id: 4,
    title: {
      fa: "درباره ما",
      en: "about us",
    },
    href: "about",
  },
  {
    id: 5,
    title: {
      fa: "تماس با ما",
      en: "contact us",
    },
    href: "contact",
  },
];

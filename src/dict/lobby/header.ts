interface TitleProps {
  fa: string;
  en: string;
}

export const title: TitleProps = {
  fa: "پروژه ری‌اکت تیم Luminous",
  en: "The Luminous Team React Project",
};

export interface MenuOptionProps {
  title: {
    en: string;
    fa: string;
  };
  href: string;
}

export const menuOptions: MenuOptionProps[] = [
  {
    title: {
      fa: "خانه",
      en: "Home",
    },
    href: "",
  },
  {
    title: {
      fa: "آموزش",
      en: "Learning",
    },
    href: "learning",
  },
];

import { type IconType } from "react-icons";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

import { type Locale } from "#/i18n.config";

interface TitleDictProps {
  title: {
    [key in Locale]: string;
  };
}

export const titleDict: TitleDictProps = {
  title: {
    fa: "پروژه ری‌اکت تیم Luminous",
    en: "The Luminous Team React Project",
  },
};

export interface HeaderMenuOptionDictProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  href: string;
}

export const headerMenuOptionsDict: HeaderMenuOptionDictProps[] = [
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

export interface FooterMenuOptionDictProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  href: string;
}

export const footerMenuOptionsDict: FooterMenuOptionDictProps[] = [
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

export interface FooterSocialMediaOptionDictProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  icon: IconType;
  href: string;
}

export const footerSocialMediaOptionsDict: FooterSocialMediaOptionDictProps[] =
  [
    {
      id: 1,
      title: {
        fa: "اینستاگرام",
        en: "Instagram",
      },
      icon: BiLogoInstagramAlt as IconType,
      href: "www.instagram.com",
    },
    {
      id: 2,
      title: {
        fa: "توئیتر",
        en: "Twitter",
      },
      icon: BsTwitter as IconType,
      href: "www.twitter.com",
    },
    {
      id: 3,
      title: {
        fa: "یوتیوب",
        en: "Youtube",
      },
      icon: BsYoutube as IconType,
      href: "www.youtube.com",
    },
    {
      id: 4,
      title: {
        fa: "فیس‌بوک",
        en: "Facebook",
      },
      icon: BsFacebook as IconType,
      href: "www.facebook.com",
    },
    {
      id: 5,
      title: {
        fa: "تلگرام",
        en: "Telegram",
      },
      icon: FaTelegramPlane as IconType,
      href: "www.telegram.com",
    },
  ];

import { type Locale } from "#/i18n.config";

export interface LobbyTitleBoxDict {
  title: {
    [key in Locale]: string;
  };
  subtitle?: {
    [key in Locale]: string;
  };
}

export const servicesTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "خدمات",
    en: "Services",
  },
  subtitle: {
    fa: "تمام آنچه نیاز دارید",
    en: "Everything You Need",
  },
};

export const categoriesTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "دسته‌بندی‌ها",
    en: "Categories",
  },
  subtitle: {
    fa: "گستره وسیعی از موضوعات",
    en: "A Wide Range of Topics",
  },
};

export const coursesTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "دوره‌ها",
    en: "Courses",
  },
  subtitle: {
    fa: "آخرین دوره‌های موجود",
    en: "Latest Available Courses",
  },
};

export const teachersTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "اساتید برتر",
    en: "Top teachers",
  },
  subtitle: {
    fa: "استاتید مهربان و دوست‌داشتنی ما",
    en: "Our kind and friendly Teachers",
  },
};

export const blogTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "اخبار و مقالات",
    en: "News and Articles",
  },
  subtitle: {
    fa: "جدیدترین اخبار دنیای برنامه‌نویسی",
    en: "Latest News in the World of Programming",
  },
};

export const suggestionsTitleBox: LobbyTitleBoxDict = {
  title: {
    fa: "پیشنهادات و انتقادات",
    en: "Suggestions and Criticisms",
  },
};

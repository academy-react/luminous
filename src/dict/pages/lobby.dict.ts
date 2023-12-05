import { Icons, type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface LobbyTitleBoxDict {
  title: {
    [key in Locale]: string;
  };
  subtitle?: {
    [key in Locale]: string;
  };
}

export const servicesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "خدمات",
    en: "Services",
  },
  subtitle: {
    fa: "تمام آنچه نیاز دارید",
    en: "Everything You Need",
  },
};

export const categoriesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "دسته‌بندی‌ها",
    en: "Categories",
  },
  subtitle: {
    fa: "گستره وسیعی از موضوعات",
    en: "A Wide Range of Topics",
  },
};

export const coursesTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "دوره‌ها",
    en: "Courses",
  },
  subtitle: {
    fa: "آخرین دوره‌های موجود",
    en: "Latest Available Courses",
  },
};

export const teachersTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "اساتید برتر",
    en: "Top teachers",
  },
  subtitle: {
    fa: "اساتید مهربان و دوست‌داشتنی ما",
    en: "Our Kind and Friendly Teachers",
  },
};

export const newsTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "اخبار و مقالات",
    en: "News and Articles",
  },
  subtitle: {
    fa: "جدیدترین اخبار دنیای برنامه‌نویسی",
    en: "Latest News in the World of Programming",
  },
};

export const suggestionsTitleBoxDict: LobbyTitleBoxDict = {
  title: {
    fa: "پیشنهادات و انتقادات",
    en: "Suggestions and Criticisms",
  },
};

export interface HeroDictProps {
  title: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
  button: {
    [key in Locale]: string;
  };
}

export const heroDict: HeroDictProps = {
  title: {
    fa: "پژوهشگاه سپهر",
    en: "Sepehr Institute",
  },
  description: {
    fa: "پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب‌و‌کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با راه‌کار‌های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند",
    en: "Sepehr Institute was established with the aim of producing and publishing quality educational content as well as introducing the community to the business opportunities in the virtual space, and we hope that through innovative solutions and use of the potential of the virtual space, we can create opportunities for people who want to advance themselves and their country",
  },
  button: {
    fa: "شروع یادگیری",
    en: "Start Learning",
  },
};

export interface ServicesDictProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  icon: Icon;
  bgColor: string;
}

export const servicesDict: ServicesDictProps[] = [
  {
    id: 1,
    title: {
      fa: "مدرک معتبر",
      en: "Valid Certificate",
    },
    icon: Icons.scrollText,
    bgColor: "bg-[#E3B709]",
  },
  {
    id: 2,
    title: {
      fa: "امتحان",
      en: "Exam",
    },
    icon: Icons.fileCheck,
    bgColor: "bg-[#D23120]",
  },
  {
    id: 3,
    title: {
      fa: "فرصت‌های شغلی",
      en: "Job Opportunity",
    },
    icon: Icons.network,
    bgColor: "bg-[#267AB2]",
  },
  {
    id: 4,
    title: {
      fa: "مشاوره",
      en: "Counseling",
    },
    icon: Icons.user,
    bgColor: "bg-[#7D329A]",
  },
];

export interface CategoryDictProps {
  title: {
    [key in Locale]: string;
  };
  Icon: Icon;
  color: string;
}

export const categoriesDict: CategoryDictProps[] = [
  {
    title: {
      fa: "وب",
      en: "Web",
    },
    Icon: Icons.search,
    color: "text-blue-500 border-blue-500",
  },
  {
    title: {
      fa: "هوش مصنوعی",
      en: "Artificial Intelligence",
    },
    Icon: Icons.search,
    color: "text-red-500 border-red-500",
  },
  {
    title: {
      fa: "هک و امنیت",
      en: "System & Security",
    },
    Icon: Icons.search,
    color: "text-green-500 border-green-500",
  },
  {
    title: {
      fa: "داده کاوی",
      en: "Data Analyses",
    },
    Icon: Icons.search,
    color: "text-cyan-500 border-cyan-500",
  },
  {
    title: {
      fa: "طراحی رابط کاربری",
      en: "UI Design",
    },
    Icon: Icons.search,
    color: "text-yellow-500 border-yellow-500",
  },
  {
    title: {
      fa: "برنامه‌نویسی فرانت",
      en: "Frontend",
    },
    Icon: Icons.search,
    color: "text-purple-500 border-purple-500",
  },
  {
    title: {
      en: "Backend",
      fa: "برنامه‌نویسی بکند",
    },
    Icon: Icons.search,
    color: "text-slate-300 border-slate-300",
  },
  {
    title: {
      fa: "برنامه‌نویسی موبایل",
      en: "Mobile Development",
    },
    Icon: Icons.search,
    color: "text-emerald-500 border-emerald-500",
  },
];
export interface CategoryColorDictProps {
  color: string;
}

export const categoriesColorDict: CategoryColorDictProps[] = [
  {
    color: "text-blue-500 border-blue-500",
  },
  {
    color: "text-red-500 border-red-500",
  },
  {
    color: "text-green-500 border-green-500",
  },
  {
    color: "text-cyan-500 border-cyan-500",
  },
  {
    color: "text-yellow-500 border-yellow-500",
  },
  {
    color: "text-purple-500 border-purple-500",
  },
  {
    color: "text-slate-300 border-slate-300",
  },
  {
    color: "text-emerald-500 border-emerald-500",
  },
];

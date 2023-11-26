import { Rocket } from "lucide-react";

import { type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface DashboardAccoundPageDict {
  welcomeText: {
    [key in Locale]: string;
  };
  weeklySchedule: {
    [key in Locale]: string;
  };
  smallDetailsCardKeys: {
    title: { [key in Locale]: string };
    subtitle: { [key in Locale]: string };
    Icon: Icon;
    color: string;
  }[];
}

export const dashboardAccountPageDict: DashboardAccoundPageDict = {
  welcomeText: {
    fa: "، خوش آمدید!",
    en: ", Welcome!",
  },
  weeklySchedule: {
    fa: "برنامه هفتگی",
    en: "Weekly Schedule",
  },
  smallDetailsCardKeys: [
    {
      title: { fa: "تکلیف‌های بررسی نشده", en: "Unreviewed Homeworks" },
      subtitle: {
        fa: "تکلیف",
        en: "Homework",
      },
      Icon: Rocket,
      color: "bg-teal-400",
    },
    {
      title: {
        fa: "جلسات تماشا نشده",
        en: "Unwatched Sessions",
      },
      subtitle: {
        fa: "جلسه",
        en: "Session",
      },

      Icon: Rocket,
      color: "bg-purple-400",
    },
    {
      title: {
        fa: "دوره‌های تکمیل نشده",
        en: "Incomplete Courses",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-slate-400",
    },
    {
      title: {
        fa: "تمامی دوره‌های من",
        en: "All My Courses",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-blue-400",
    },

    {
      title: {
        fa: "دوره‌های در حال برگزاری",
        en: "Courses in Progress",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-green-400",
    },
    {
      title: {
        fa: "دوره‌های تکمیل شده",
        en: "Completed Courses",
      },
      subtitle: {
        fa: "دوره",
        en: "Course",
      },
      Icon: Rocket,
      color: "bg-red-400",
    },
  ],
};

import { Icons, type Icon } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

export interface CategoryDictProps {
  title: {
    [key in Locale]: string;
  };
  Icon: Icon;
  color: string;
}

export const CategoriesDict: CategoryDictProps[] = [
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
    color: "text-zinc-500 border-zinc-500",
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
      en: "General",
      fa: "کلید",
    },
    Icon: Icons.search,
    color: "text-purple-500 border-purple-500",
  },
  {
    title: {
      en: "General",
      fa: "کلید",
    },
    Icon: Icons.search,
    color: "text-slate-500 border-slate-500",
  },
  {
    title: {
      en: "General",
      fa: "کلید",
    },
    Icon: Icons.search,
    color: "text-emerald-500 border-emerald-500",
  },
];

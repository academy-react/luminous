import { LayoutGrid, LayoutList, type LucideIcon } from "lucide-react";

import { type Locale } from "#/i18n.config";

export interface TitleDictProps {
  title: {
    [key in Locale]: string;
  };
}
export const courseDictTitle: TitleDictProps[] = [
  {
    title: {
      fa: "دوره ها",
      en: "Courses",
    },
  },
];

export type SwitchedListStates = "grid" | "list";

export interface GridListSwitcherDictProps {
  id: number;
  Icon: LucideIcon;
  name: SwitchedListStates;
}

export const gridListSwitcherDict: GridListSwitcherDictProps[] = [
  {
    id: 1,
    Icon: LayoutGrid,
    name: "grid",
  },
  {
    id: 2,
    Icon: LayoutList,
    name: "list",
  },
];

export interface SortOptionDictProps {
  id: string;
  title: { [key in Locale]: string };
  value: { [key in Locale]: string };
}

// blog sortTitle
export const blogSortOptionsDict: SortOptionDictProps[] = [
  {
    id: "s1",
    title: {
      fa: "همه ی اخبار",
      en: "all news",
    },
    value: {
      fa: "همه ی اخبار",
      en: "All news",
    },
  },
  {
    id: "s3",
    title: {
      fa: "جدیدترین",
      en: "The newest",
    },
    value: {
      fa: "جدیدترین",
      en: "The newest",
    },
  },
  {
    id: "s2",
    title: {
      fa: "پربازدیدترین",
      en: "The most popular",
    },
    value: {
      fa: "پربازدیدترین",
      en: "The most popular",
    },
  },
];

//   course options

export const courseSortOptionsDict: SortOptionDictProps[] = [
  {
    id: "s1",
    title: {
      fa: "همه ی دوره ها",
      en: "all courses",
    },
    value: {
      fa: "همه ی دوره ها",
      en: "All courses",
    },
  },
  {
    id: "s2",
    title: {
      fa: "پربازدیدترین",
      en: "The most popular",
    },
    value: {
      fa: "پربازدیدترین",
      en: "The most popular",
    },
  },
  {
    id: "s3",
    title: {
      fa: "جدیدترین",
      en: "The newest",
    },
    value: {
      fa: "جدیدترین",
      en: "The newest",
    },
  },
];
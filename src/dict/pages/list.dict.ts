import { LayoutGrid, LayoutList, type LucideIcon } from "lucide-react";

export interface TitleProps {
  title: {
    fa: string;
    en: string;
  };
}
export const courseTitle: TitleProps[] = [
  {
    title: {
      fa: "دوره ها",
      en: "Courses",
    },
  },
];

export type switchedListStates = "grid" | "list";

export interface GridListSwitcherProps {
  id: number;
  Icon: LucideIcon;
  name: switchedListStates;
}

export const gridListSwitcher: GridListSwitcherProps[] = [
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

export interface SortOptionProps {
  id: string;
  title: { [key in Locale]: string };
  value: { [key in Locale]: string };
}
// blog sortTitle
export const blogSortOptions: SortOptionProps[] = [
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

export const courseSortOptions: SortOptionProps[] = [
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

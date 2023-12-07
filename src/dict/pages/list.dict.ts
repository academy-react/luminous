import { Icons, type Icon } from "@/components/assets/icons";

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

export type SortTypeStates = "ASC" | "DESC";

export type TempSortTypeStates = "asc" | "desc";

export type SwitchedListStates = "grid" | "list";

export interface GridListSwitcherDictProps {
  id: number;
  Icon: Icon;
  name: SwitchedListStates;
}

export const gridListSwitcherDict: GridListSwitcherDictProps[] = [
  {
    id: 1,
    Icon: Icons.layoutGrid,
    name: "grid",
  },
  {
    id: 2,
    Icon: Icons.layoutList,
    name: "list",
  },
];

export interface SortOptionDictProps {
  title: { [key in Locale]: string };
  option: {
    col: string;
    type: SortTypeStates;
  };
}

// blog sortTitle
// export const blogSortOptionsDict: SortOptionDictProps[] = [
//   {
//     id: "s1",
//     title: {
//       fa: "همه ی اخبار",
//       en: "all news",
//     },
//     value: {
//       fa: "همه ی اخبار",
//       en: "All news",
//     },
//   },
//   {
//     id: "s3",
//     title: {
//       fa: "جدیدترین",
//       en: "The newest",
//     },
//     value: {
//       fa: "جدیدترین",
//       en: "The newest",
//     },
//   },
//   {
//     id: "s2",
//     title: {
//       fa: "پربازدیدترین",
//       en: "The most popular",
//     },
//     value: {
//       fa: "پربازدیدترین",
//       en: "The most popular",
//     },
//   },
// ];

//   course options

export const courseSortOptionsDict: SortOptionDictProps[] = [
  {
    title: {
      fa: "همه ی دوره ها",
      en: "all courses",
    },
    option: {
      col: "Active",
      type: "DESC",
    },
  },
  {
    title: {
      fa: "ارزان ترین",
      en: "cheapest ",
    },
    option: {
      col: "cost",
      type: "ASC",
    },
  },
  {
    title: {
      fa: "گران ترین",
      en: "the most expensive ",
    },
    option: {
      col: "cost",
      type: "DESC",
    },
  },
];

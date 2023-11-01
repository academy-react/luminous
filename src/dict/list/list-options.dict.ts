import { type Locale } from "#/i18n.config";

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

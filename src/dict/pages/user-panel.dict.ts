import { Icons, type Icon } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

export interface PanelAsideOptionProps {
  id: number;
  Icon: Icon;
  title: { [lang in Locale]: string };
  href: string;
}
export const panelAsideOption: PanelAsideOptionProps[] = [
  {
    id: 1,
    Icon: Icons.home,
    title: {
      fa: "پیشخوان",
      en: "Dashboard",
    },
    href: "account",
  },
  {
    id: 2,
    Icon: Icons.myCourses,
    title: {
      fa: "دوره های من",
      en: "My courses",
    },
    href: "courses",
  },
  {
    id: 3,
    Icon: Icons.edit,
    title: {
      fa: "ویرایش پروفایل",
      en: "Edit profile",
    },
    href: "edit",
  },
];

import {
  FileCheck,
  Network,
  ScrollText,
  User,
  type LucideIcon,
} from "lucide-react";

import { type Locale } from "#/i18n.config";

export interface ServicesProps {
  id: number;
  title: {
    [key in Locale]: string;
  };
  icon: LucideIcon;
  bgColor: string;
}

export const services: ServicesProps[] = [
  {
    id: 1,
    title: {
      fa: "مدرک معتبر",
      en: "Valid Certificate",
    },
    icon: ScrollText,
    bgColor: "bg-[#E3B709]",
  },
  {
    id: 2,
    title: {
      fa: "امتحان",
      en: "Exam",
    },
    icon: FileCheck,
    bgColor: "bg-[#D23120]",
  },
  {
    id: 3,
    title: {
      fa: "فرصت‌های شغلی",
      en: "Job Opportunity",
    },
    icon: Network,
    bgColor: "bg-[#267AB2]",
  },
  {
    id: 4,
    title: {
      fa: "مشاوره",
      en: "Counseling",
    },
    icon: User,
    bgColor: "bg-[#7D329A]",
  },
];

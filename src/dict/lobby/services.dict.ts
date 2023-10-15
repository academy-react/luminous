import { Home, LucideIcon } from "lucide-react";

export interface ServicesProps {
  id: number;
  title: {
    fa: string;
    en: string;
  };
  icon: LucideIcon;
}

export const services: ServicesProps[] = [
  {
    id: 1,
    title: {
      fa: "مدرک معتبر",
      en: "Valid certificate",
    },
    icon: Home,
  },
  {
    id: 2,
    title: {
      fa: "امتحان ",
      en: " exam",
    },
    icon: Home,
  },
  {
    id: 3,
    title: {
      fa: " فرصت شغلی",
      en: " job opportunity",
    },
    icon: Home,
  },
  {
    id: 4,
    title: {
      fa: " مشاوره",
      en: "counseling ",
    },
    icon: Home,
  },
];

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type Locale } from "#/i18n.config";
import { CourseByPaginationType } from "@/core/validators/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}


export const generatePagination = ({currentPage,totalCount}:{currentPage: number; totalCount: CourseByPaginationType;}) => {

  if (totalCount <= 4) {
    return Array.from({ length: totalCount }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalCount - 1, totalCount];
  }

  if (currentPage >= totalCount - 2) {
    return [1, 2, '...', totalCount - 2, totalCount - 1, totalCount];
  }


  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalCount,
  ];
};
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type Locale } from "#/i18n.config";

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

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { type Locale } from "#/i18n.config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleDate(date: string, lang: Locale) {
  const d = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  return d.toLocaleDateString(lang, options);
}

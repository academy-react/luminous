import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toEnglishDigits(num: string) {
  interface ID {
    [key: string]: string;
  }

  const id: ID = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  return num.toString().replace(/[^0-9.]/g, function (w) {
    return id[w] || w;
  });
}

export function toPersianDigits(num: string) {
  interface ID {
    [key: string]: string;
  }

  const id: ID = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return num.toString().replace(/[0-9]/g, function (w) {
    return id[w] || w;
  });
}

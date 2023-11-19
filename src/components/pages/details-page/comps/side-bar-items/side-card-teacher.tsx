import Link from "next/link";

import { Link as LinkIcon } from "lucide-react";

import { H4 } from "@/components/elements/ui";

export const TeacherSideCard = () => {
  return (
    <div className="shadow-light flex flex-col items-center justify-center rounded-2xl bg-card px-5 py-6 text-center">
      <div className="mx-auto mb-2 aspect-square w-24 rounded-full bg-gray-300 p-4"></div>
      <H4 className="mb-0.5 text-2xl">نام فردی در اینجا</H4>
      <Link
        href="#"
        className="flex cursor-pointer items-center justify-center gap-1 text-sm text-slate-500 transition-colors duration-500 hover:text-black"
      >
        <span>مدرس دوره</span>
        <LinkIcon className="w-4" />
      </Link>
      <p className="mt-2.5 font-light text-zinc-700">
        لورم ایپسم متن تشکیلی از واژگانی است که در واقع هیچ معنایی ندارند و کمتر
        کسی حوصله می‌کند که آن‌ها را بخواند، اما اگر افراد کمی توجه از خودشان
        نشان دهند ممکن است بعضی اوقات متوجه شوند که متونی که نوشته شده در واقع
        ماشینی نیستند و شاید فردی واقعاً زمان برای نوشتن آن‌ها گذاشته باشد
        چون‌که شاید اینترنت آن فرد قطع بوده و نمی‌توانسته لورم فارسی را جست‌وجو
        کند.
      </p>
    </div>
  );
};

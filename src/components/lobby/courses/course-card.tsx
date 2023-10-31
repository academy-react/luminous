import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { type Locale } from "#/i18n.config";

type CourseCardProps = {
  lang: Locale;
  title: { [key in Locale]: string };
  desc: { [key in Locale]: string };
  teacher: { [key in Locale]: string };
};

export const CourseCard = ({ lang, title, desc, teacher }: CourseCardProps) => {
  return (
    <Card className="w-full rounded-xl border-none bg-card p-4 shadow">
      <CardContent className="flex h-full w-full flex-col justify-between">
        <Link href="#" className="relative aspect-video w-full">
          <Image
            src="/images/dev/node-js.jpg"
            alt="course-picture"
            fill
            className="rounded-xl object-contain"
          />
        </Link>
        <div className="flex w-full items-center justify-between">
          <CardTitle className="py-4 font-black md:text-2xl">
            {title[lang]}
          </CardTitle>
          <h4 className="text-sm text-text/60 md:text-lg">{teacher[lang]}</h4>
        </div>
        <div className="flex w-full items-center justify-between">
          <p className="line-clamp-2 max-w-xs pe-5 text-sm text-text/60 sm:max-w-md md:max-w-sm md:text-base lg:max-w-md">
            {desc[lang]}
          </p>
          <Link href="#" className="">
            <Button className="w-full max-w-fit rounded-lg border-2 border-primary bg-primary p-3 text-xs text-secondary duration-500 hover:bg-card hover:text-primary">
              <p className="hidden sm:block">
                {
                  {
                    fa: "مشاهده دوره",
                    en: "View Course",
                  }[lang]
                }
              </p>
              <p className="sm:hidden">
                {
                  {
                    fa: "مشاهده",
                    en: "View",
                  }[lang]
                }
              </p>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

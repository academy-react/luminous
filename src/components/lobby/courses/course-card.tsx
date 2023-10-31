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
    <Card className="h-full w-full rounded-xl border-none bg-card p-4 shadow">
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
          <CardTitle className="text-2xl font-extrabold">
            {title[lang]}
          </CardTitle>
          <h4 className="text-lg text-text/60">{teacher[lang]}</h4>
        </div>
        <div className="flex w-full items-end justify-between">
          <p className="line-clamp-2 pe-5 text-base text-text/60">
            {desc[lang]}
          </p>
          <Button className="w-full max-w-fit rounded-lg border-2 border-primary bg-primary p-3 text-secondary duration-500 hover:bg-card hover:text-primary">
            <Link href="#" className="">
              {
                {
                  fa: "مشاهده دوره",
                  en: "View Course",
                }[lang]
              }
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

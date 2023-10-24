import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { type Locale } from "#/i18n.config";

type CourseCardProps = {
  lang: Locale;
  title: { [key in Locale]: string };
  desc: { [key in Locale]: string };
  teacher: { [key in Locale]: string };
  image: string;
};

export const CourseFullCard = ({
  lang,
  title,
  desc,
  teacher,
  image,
}: CourseCardProps) => {
  return (
    <Card className="h-full w-full rounded-xl border p-4 shadow">
      <CardContent className="flex h-full w-full flex-col items-center gap-3 sm:flex-row lg:flex-col lg:justify-between">
        <Link href="#" className="relative aspect-video  w-full">
          <Image
            src={image}
            alt="course-picture"
            fill
            className="rounded-xl object-contain"
          />
        </Link>
        <CardFooter>
          <div className="mb-2 flex w-full items-center justify-between lg:mb-4">
            <CardTitle className="text-xl font-bold lg:text-2xl">
              {title[lang]}
            </CardTitle>
            <h4 className="text-lg text-gray-600">{teacher[lang]}</h4>
          </div>
          <div className="hidden w-full items-end justify-between sm:flex">
            <p className="line-clamp-2 pe-5 text-base text-gray-600">
              {desc[lang]}
            </p>
            <Button className="w-full max-w-fit rounded-lg border-2 border-purple-primary p-3 text-purple-primary duration-300 hover:bg-purple-primary hover:text-white">
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
        </CardFooter>
      </CardContent>
    </Card>
  );
};


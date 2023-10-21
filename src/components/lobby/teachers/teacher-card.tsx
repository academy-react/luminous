import Image from "next/image";

import Balancer from "react-wrap-balancer";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

import { type Locale } from "#/i18n.config";

type TeacherCardProps = {
  lang: Locale;
  image: string;
  fullName: {
    [key in Locale]: string;
  };
  position: {
    [key in Locale]: string;
  };
  description: {
    [key in Locale]: string;
  };
  onClick: () => void;
};

export const TeacherFullCard = ({
  lang,
  image,
  fullName,
  position,
  description,
}: TeacherCardProps) => {
  return (
    <div className="px-10">
      <Card className="relative flex max-w-sm flex-col items-center gap-4 p-4 text-center shadow md:flex-row">
        <div className="md:absolute md:start-0 md:top-1/2 md:-translate-y-1/2 md:ltr:-translate-x-1/2 md:rtl:translate-x-1/2">
          <div className="relative aspect-square h-24">
            <Image
              src={image}
              alt="teacher-picture"
              fill
              className="rounded-xl"
            />
          </div>
        </div>
        <CardContent className="flex flex-col items-center md:items-start md:ps-12">
          <CardTitle className="text-xl font-bold">{fullName[lang]}</CardTitle>
          <h4 className="text-lg font-semibold">{position[lang]}</h4>
          <CardDescription className="pt-4 text-center text-sm font-medium md:text-start">
            {description[lang]}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export const TeacherMiniCard = ({
  lang,
  image,
  fullName,
  position,
  onClick,
}: TeacherCardProps) => {
  return (
    <Card className="relative flex cursor-pointer p-4 shadow" onClick={onclick}>
      <div className="absolute -top-2 start-3">
        <div className="relative aspect-square h-16">
          <Image
            src={image}
            alt="teacher-picture"
            fill
            className="rounded-xl"
          />
        </div>
      </div>
      <CardContent className="flex flex-col ps-[70px]">
        <CardTitle className="text-sm font-semibold">
          {fullName[lang]}
        </CardTitle>
        <h4 className="text-xs font-medium">{position[lang]}</h4>
      </CardContent>
    </Card>
  );
};

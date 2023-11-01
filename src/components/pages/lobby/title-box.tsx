import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui/card";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

type TitleBoxProps = {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  desc?: {
    [key in Locale]: string;
  };
  className?: string;
};

export const TitleBox = ({ lang, title, desc, className }: TitleBoxProps) => {
  return (
    <Card
      className={cn(
        `rounded-xl border-primary px-4 py-3 text-primary shadow-sm shadow-primary sm:px-7 md:px-12`,
        className
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-1.5">
        <CardTitle className="text-2xl font-black md:text-3xl">
          {title[lang]}
        </CardTitle>
        {desc && (
          <CardDescription className="text-center text-xs md:text-sm">
            {desc[lang]}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

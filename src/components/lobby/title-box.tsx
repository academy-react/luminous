import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

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
        `rounded-xl border-primary bg-card px-4 py-3 shadow-sm shadow-primary sm:px-7 md:px-12`,
        className
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-1.5 text-primary">
        <CardTitle className="text-3xl font-black">{title[lang]}</CardTitle>
        {desc && (
          <CardDescription className="text-center text-lg">
            {desc[lang]}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

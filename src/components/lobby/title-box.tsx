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
    <Card className={cn(`rounded-xl px-12 py-3 shadow`, className)}>
      <CardContent className="flex flex-col items-center justify-center gap-1.5 text-purple-primary">
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


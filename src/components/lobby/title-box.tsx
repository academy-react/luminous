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

const TitleBox = ({ lang, title, desc, className }: TitleBoxProps) => {
  return (
    <Card className={cn(`w-fit rounded-xl px-12 py-2 shadow`, className)}>
      <CardContent className="flex flex-col items-center justify-center text-purple-primary">
        <CardTitle className="text-3xl font-bold">{title[lang]}</CardTitle>
        {desc && (
          <CardDescription className="text-center text-lg">
            {desc[lang]}
          </CardDescription>
        )}
      </CardContent>
    </Card>
  );
};

export default TitleBox;

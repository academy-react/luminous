import { cn } from "@/lib/utils";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { type Icon } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

type CategoryCardProps = {
  lang: Locale;
  title: {
    [key in Locale]: string;
  };
  Icon: Icon;
  color: string;
};

export const CategoryCard = ({
  lang,
  title,
  Icon,
  color,
}: CategoryCardProps) => {
  return (
    <Card
      className={cn(
        "flex items-center justify-center px-7 py-4 sm:px-10 md:h-32 md:w-48",
        color
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16" />
        <CardTitle className="text-center text-sm font-extrabold sm:text-base md:text-lg">
          {title[lang]}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

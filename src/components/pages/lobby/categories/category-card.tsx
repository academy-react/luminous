import { Card, CardContent, CardTitle } from "@/components/elements/ui/card";
import { type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

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
        "flex items-center justify-center bg-card px-7 py-4 sm:px-8 lg:h-28 lg:w-48",
        color
      )}
    >
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <Icon className="h-10 w-10 lg:h-14 lg:w-14" />
        <CardTitle className="text-center text-sm font-extrabold">
          {title[lang]}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

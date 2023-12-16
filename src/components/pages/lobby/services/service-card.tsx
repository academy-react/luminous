import { Card, CardContent } from "@/components/elements/ui";
import { type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  Icon: Icon;
  bgColor: string;
};

export const ServiceCard = ({ Icon, title, bgColor }: ServiceCardProps) => {
  return (
    <Card className={cn("flex h-40 w-full border-none p-4 shadow-md", bgColor)}>
      <CardContent className="flex flex-row items-center justify-center gap-5">
        <Icon className=" text-white sm:h-14 sm:w-14 md:h-20 md:w-20" />
        <h3 className="font-black text-white sm:text-lg md:text-2xl">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

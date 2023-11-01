import { type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/elements/ui";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  Icon: LucideIcon;
  bgColor: string;
};

export const ServiceCard = ({ Icon, title, bgColor }: ServiceCardProps) => {
  return (
    <Card
      className={cn(
        "flex h-20 w-40 border-none p-4 shadow-md sm:w-56 md:h-32 md:w-72",
        bgColor
      )}
    >
      <CardContent className="flex flex-row items-center justify-center gap-5">
        <Icon className=" text-white sm:h-14 sm:w-14 md:h-20 md:w-20" />
        <h3 className="font-black text-white sm:text-lg md:text-2xl">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

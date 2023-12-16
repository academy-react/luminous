import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/elements/ui";
import { type Icon } from "@/components/assets/icons";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  title: string;
  desc: string;
  Icon: Icon;
  bgColor: string;
};

export const ServiceCard = ({
  Icon,
  title,
  desc,
  bgColor,
}: ServiceCardProps) => {
  return (
    <Card className={cn("flex h-40 w-full border-none p-4 shadow-md", bgColor)}>
      <CardContent className="flex flex-row items-center justify-center gap-5">
        <Icon className=" text-white sm:h-14 sm:w-14 md:h-20 md:w-20" />
        <div className="flex flex-col items-start gap-2">
          <CardTitle className="font-black text-white sm:text-lg md:text-2xl">
            {title}
          </CardTitle>
          <CardDescription className="text-white sm:text-sm">
            {desc}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};

import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  Icon: LucideIcon;
  bgColor: string;
};

const ServiceCard = ({ Icon, title, bgColor }: ServiceCardProps) => {
  console.log(bgColor);
  console.log("test");

  return (
    <Card className={cn("flex w-72 p-4 shadow-md", bgColor)}>
      <CardContent className="flex flex-row items-center gap-3">
        <Icon className="text-white" size={70} />
        <h3 className="text-2xl text-white">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

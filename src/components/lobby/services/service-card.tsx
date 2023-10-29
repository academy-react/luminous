import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  Icon: LucideIcon;
  bgColor: string;
};

export const ServiceCard = ({ Icon, title, bgColor }: ServiceCardProps) => {
  return (
    <Card className={cn("flex w-72 border-none p-4 shadow-md", bgColor)}>
      <CardContent className="flex flex-row items-center gap-3">
        <Icon className="h-20 w-20 text-white" />
        <h3 className="text-2xl text-white">{title}</h3>
      </CardContent>
    </Card>
  );
};

import { type LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  Icon: LucideIcon;
};

const ServiceCard = ({ Icon, title }: ServiceCardProps) => {
  return (
    <div>
      <Card className="flex">
        <CardContent className="flex flex-row items-center gap-3 ">
          <Icon className="h-20 w-16 text-red-500" />
          <h3 className="text-2xl text-red-500">{title}</h3>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceCard;

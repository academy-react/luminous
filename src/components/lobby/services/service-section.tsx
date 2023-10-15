import { services } from "@/dict/lobby/services.dict";

import { Card, CardContent } from "@/components/ui/card";
import TitleBox from "@/components/common/landing-title-box";

import { type Locale } from "#/i18n.config";

import ServiceCard from "./service-card";

const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      <Card className="flex w-full flex-col  ">
        <TitleBox />
        <CardContent className="grid w-full grid-cols-2 gap-x-8 gap-y-6 ">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title[lang]}
              Icon={item.icon}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceSection;

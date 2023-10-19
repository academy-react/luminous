import { services } from "@/dict/lobby/services.dict";

import { CardContent } from "@/components/ui/card";
import TitleBox from "@/components/common/landing-title-box";

import { type Locale } from "#/i18n.config";

import ServiceCard from "./service-card";

const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      <div className="flex w-full flex-col  ">
        <TitleBox title="خدمات " desc="تمام آنچه نیاز دارید" className="" />
        <CardContent className="grid w-full grid-cols-2 gap-x-8 gap-y-6 ">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title[lang]}
              Icon={item.icon}
            />
          ))}
        </CardContent>
      </div>
    </div>
  );
};

export default ServiceSection;

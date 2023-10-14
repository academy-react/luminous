import { services } from "@/dict/lobby/services.dict";

import { type Locale } from "#/i18n.config";

import ServiceCard from "./service-card";

const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div>
      <div className="grid w-full grid-cols-2 gap-x-8 gap-y-6 ">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title[lang]}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

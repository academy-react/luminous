import { servicesTitleBox } from "@/dict/lobby/lobby-title-box.dict";
import { services } from "@/dict/lobby/services.dict";

import { ServiceCard } from "@/components/lobby/services/service-card";
import { TitleBox } from "@/components/lobby/title-box";

import { type Locale } from "#/i18n.config";

export const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={servicesTitleBox.title}
        desc={servicesTitleBox.subtitle}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((item) => (
          <ServiceCard
            key={item.id}
            title={item.title[lang]}
            Icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

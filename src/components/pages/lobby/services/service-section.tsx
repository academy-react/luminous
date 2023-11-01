import { ServiceCard } from "@/components/pages/lobby/services/service-card";
import { TitleBox } from "@/components/pages/lobby/title-box";

import { services, servicesTitleBox } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={servicesTitleBox.title}
        desc={servicesTitleBox.subtitle}
      />
      <div className="grid gap-3 xxs:grid-cols-2 md:gap-6">
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

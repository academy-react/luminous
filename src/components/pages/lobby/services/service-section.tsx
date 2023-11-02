import { TitleBox } from "@/components/pages/lobby";
import { ServiceCard } from "@/components/pages/lobby/services/service-card";

import { servicesDict, servicesTitleBoxDict } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={servicesTitleBoxDict.title}
        desc={servicesTitleBoxDict.subtitle}
      />
      <div className="grid gap-3 xxs:grid-cols-2 md:gap-6">
        {servicesDict.map((item) => (
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

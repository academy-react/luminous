import { TitleBox } from "@/components/pages/lobby";
import { ServiceCard } from "@/components/pages/lobby/services/service-card";

import { servicesDict, servicesTitleBoxDict } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="relative mt-20 sm:mt-40">
      <div className="container">
        <TitleBox
          lang={lang}
          title={servicesTitleBoxDict.title}
          desc={servicesTitleBoxDict.subtitle}
        />
        <div className="grid items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
    </section>
  );
};

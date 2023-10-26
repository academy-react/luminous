import { CategoriesDict } from "@/dict/lobby/categories.dict";
import { categoriesTitleBox } from "@/dict/lobby/lobby-title-box.dict";

import {TitleBox} from "@/components/lobby/title-box";
import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

import { CategoryCard } from "./category-card";

export const CategoriesSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={categoriesTitleBox.title}
        desc={categoriesTitleBox.subtitle}
      />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {CategoriesDict.map((category) => (
          <CategoryCard
            key={category.title[lang]}
            lang={lang}
            title={category.title}
            Icon={category.Icon}
            color={category.color}
          />
        ))}
      </div>
    </section>
  );
};

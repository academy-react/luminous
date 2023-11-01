import { CategoryCard } from "@/components/pages/lobby/categories/category-card";
import { TitleBox } from "@/components/pages/lobby/title-box";

import {
  categoriesDict,
  categoriesTitleBoxDict,
} from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const CategoriesSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={categoriesTitleBoxDict.title}
        desc={categoriesTitleBoxDict.subtitle}
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {categoriesDict.map((category) => (
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

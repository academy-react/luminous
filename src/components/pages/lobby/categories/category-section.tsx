import { CategoryCard } from "@/components/pages/lobby/categories/category-card";
import { TitleBox } from "@/components/pages/lobby/title-box";

import { categoriesDict } from "@/dict/lobby/categories.dict";
import { categoriesTitleBox } from "@/dict/lobby/lobby-title-box.dict";

import { type Locale } from "#/i18n.config";

export const CategoriesSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={categoriesTitleBox.title}
        desc={categoriesTitleBox.subtitle}
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

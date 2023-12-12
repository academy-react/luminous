import { TitleBox } from "@/components/pages/lobby";
import { CategoryCard } from "@/components/pages/lobby/categories/category-card";

import {
  categoriesColorDict,
  categoriesTitleBoxDict,
} from "@/dict/pages/lobby.dict";

import { getCourseCategories } from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const CategoriesSection = async ({ lang }: { lang: Locale }) => {
  const data = await getCourseCategories();

  if (!data) return null;

  return (
    <section className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={categoriesTitleBoxDict.title}
        desc={categoriesTitleBoxDict.subtitle}
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {data.map((category, index) => (
          <CategoryCard
            key={category.id}
            title={category.techName}
            icon={category.iconAddress}
            color={categoriesColorDict[index]?.color}
          />
        ))}
      </div>
    </section>
  );
};

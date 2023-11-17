import { TitleBox } from "@/components/pages/lobby";
import { CategoryCard } from "@/components/pages/lobby/categories/category-card";
import {
  CategoryColorDictProps,
  categoriesTitleBoxDict,
} from "@/dict/pages/lobby.dict";
import {categoriesColorDict} from '@/dict/pages/lobby.dict'

import { type Locale } from "#/i18n.config";
import {type CategoryListType} from "@/core/validators/api/category";

export const CategoriesSection = ({ lang , data , categoriesColorDict }: { lang: Locale; data: CategoryListType; categoriesColorDict:CategoryColorDictProps}) => {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <TitleBox
        lang={lang}
        title={categoriesTitleBoxDict.title}
        desc={categoriesTitleBoxDict.subtitle}
      />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {data.map((category) => (
          <CategoryCard
            key={category.id}
            // lang={lang}
            title={category.techName}
            icon={category.iconAddress}
            color={categoriesColorDict.color}
          />
     

        ))}
       
      </div>
    </section>
  );
};

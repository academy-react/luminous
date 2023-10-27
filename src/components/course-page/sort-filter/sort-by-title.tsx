import { sortTitle } from "@/dict/dev/course-list.dict";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabContent } from "@/components/common/tabcontent";

import { type Locale } from "#/i18n.config";

export const SortByTitle = ({ lang }: { lang: Locale }) => {
  return (
    sortTitle &&
    sortTitle[0] &&
    (
      <Tabs defaultValue={sortTitle[0]?.value[lang]}>
        <TabsList className="w-full">
          {sortTitle.map((item) => {
            return (
              <TabsTrigger key={item.id} value={item.value[lang]}>
                {item.title[lang]}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {sortTitle.map((item, index) => {
          return (
            <TabContent
              key={index}
              value={item.value}
              title={item.title}
              className=""
              lang={lang}
            />
          );
        })}
      </Tabs>
    )
  );
};

import { type Locale } from "#/i18n.config";

import { BlogContent } from "./blog-content";
import { BlogSideBar } from "./blog-side-bar";

export const BlogPageSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex h-full w-full gap-3 ">
      <div className="flex w-[20%] flex-col  ">
        <BlogSideBar lang={lang} />
      </div>
      <div className="flex w-[80%] flex-col ">
        <BlogContent lang={lang} />
      </div>
    </div>
  );
};

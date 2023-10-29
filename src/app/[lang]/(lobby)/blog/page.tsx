import { BlogPageSection } from "@/components/blog-page/blog-page-section";

import { type Locale } from "#/i18n.config";

const BlogPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <BlogPageSection lang={lang} />
    </main>
  );
};

export default BlogPage;

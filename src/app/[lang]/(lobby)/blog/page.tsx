import { BlogPageSection } from "@/components/blog-page/blog-page-section";
import PageAnimationWrapper from "@/components/layout/animation/page-animation-wrapper";

import { type Locale } from "#/i18n.config";

const BlogPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="flex h-full items-center justify-center">
      <BlogPageSection lang={lang} />
    </PageAnimationWrapper>
  );
};

export default BlogPage;

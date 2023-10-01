import { type Locale } from "#/i18n.config";

const BlogPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی بلاگ</h1>
    </main>
  );
};

export default BlogPage;

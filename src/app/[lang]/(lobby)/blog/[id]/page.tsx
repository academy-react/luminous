import { type Locale } from "#/i18n.config";

const BlogIDPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی بلاگ به شماره {id}</h1>
    </main>
  );
};

export default BlogIDPage;

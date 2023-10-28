import { type Locale } from "#/i18n.config";

const ServicesPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی سرویس ها</h1>
    </main>
  );
};

export default ServicesPage;
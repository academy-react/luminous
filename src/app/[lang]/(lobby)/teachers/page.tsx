import { type Locale } from "#/i18n.config";

const TeachersPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی اساتید</h1>
    </main>
  );
};

export default TeachersPage;

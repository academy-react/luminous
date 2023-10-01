import { type Locale } from "#/i18n.config";

const TeachersIDPage = ({
  params: { lang, username },
}: {
  params: { lang: Locale; username: string };
}) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">پنل دانشجو به شماره {username}</h1>
    </main>
  );
};

export default TeachersIDPage;

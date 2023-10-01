import { type Locale } from "#/i18n.config";

const SignInPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی ورود</h1>
    </main>
  );
};

export default SignInPage;

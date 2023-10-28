import Link from "next/link";

import { resetPasswordForm } from "@/dict/auth/auth.dict";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordLady } from "@/components/artworks/auth/reset-pass-lady.artwork";
import { ResetPasswordForm } from "@/components/forms/reset-password-form";

import { type Locale } from "#/i18n.config";

const ResetPasswordPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  return (
    <main className="flex h-full w-full items-center justify-center gap-10 xl:gap-24">
      <Card className="w-[22rem] border-none bg-white px-5 shadow-lg">
        <CardHeader className="flex items-center justify-center gap-4 py-7">
          <CardTitle className="text-2xl font-extrabold text-purple-primary">
            {resetPasswordForm.title[lang]}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <ResetPasswordForm lang={lang} />
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-3 py-4">
          <Link
            aria-label="sign-in"
            href={`/${lang}/sign-in`}
            className="text-xs text-blue-800 transition-colors duration-300 hover:text-blue-500"
          >
            {resetPasswordForm.signIn[lang]}
          </Link>
          <Link
            aria-label="sign-up"
            href={`/${lang}/sign-up`}
            className="text-xs text-blue-800 transition-colors duration-300 hover:text-blue-500"
          >
            {resetPasswordForm.signUp[lang]}
          </Link>
        </CardFooter>
      </Card>
      <div className="relative -z-10 hidden h-full w-[40vw] flex-row md:flex">
        <div className="absolute end-0 top-1/2 translate-y-[-50%]">
          <ResetPasswordLady />
        </div>
      </div>
    </main>
  );
};

export default ResetPasswordPage;

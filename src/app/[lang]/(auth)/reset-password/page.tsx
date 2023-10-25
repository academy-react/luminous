import Link from "next/link";

import { resetPasswordForm } from "@/dict/auth/auth.dict";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ResetPasswordForm } from "@/components/forms/reset-password-form";

import { type Locale } from "#/i18n.config";

const ResetPasswordPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Card className="w-full">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">
            {resetPasswordForm.title[lang]}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          <ResetPasswordForm lang={lang} />
        </CardContent>
        <CardFooter className="flex items-center justify-center gap-3">
          <Link aria-label="sign-in" href={`/${lang}/sign-in`}>
            {resetPasswordForm.signIn[lang]}
          </Link>
          <Link aria-label="sign-up" href={`/${lang}/sign-up`}>
            {resetPasswordForm.signUp[lang]}
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default ResetPasswordPage;

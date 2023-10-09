import Link from "next/link";

import { signInForm } from "@/dict/auth/auth.dict";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SignInForm from "@/components/forms/sign-in-form";

import { type Locale } from "#/i18n.config";

const SignInPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full w-full items-center justify-center">
      <Card className="w-full">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">{signInForm.title[lang]}</CardTitle>
        </CardHeader>
        <CardContent className="">
          <SignInForm lang={lang} />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-3">
          <Link aria-label="reset-password" href={`/${lang}/reset-password`}>
            {signInForm.forgot[lang]}
          </Link>
          <div className="text-sm">
            <span className="me-1 inline-block opacity-70">
              {signInForm.question[lang]}
            </span>
            <Link
              aria-label="Sign up"
              href={`/${lang}/sign-up`}
              className="underline-offset-4 transition-colors hover:underline"
            >
              {signInForm.link[lang]}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignInPage;

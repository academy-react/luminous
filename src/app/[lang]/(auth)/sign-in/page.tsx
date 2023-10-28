import Link from "next/link";

import { signInForm } from "@/dict/auth/auth.dict";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginLady } from "@/components/artworks/login/login-lady";
import { LoginMobile } from "@/components/artworks/login/login-mobile";
import { SignInForm } from "@/components/forms/sign-in-form";
import { Icons } from "@/components/utils/icons";

import { type Locale } from "#/i18n.config";

const SignInPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full w-full items-center justify-center gap-10 xl:gap-24">
      <Card className="w-[22rem] border-none bg-white px-4 shadow-lg">
        <CardHeader className="flex items-center justify-center gap-4 py-7">
          <CardTitle className="text-2xl font-extrabold text-purple-primary">
            {signInForm.title[lang]}
          </CardTitle>
          <Icons.logInIcon className="h-10 w-10" />
        </CardHeader>
        <CardContent className="">
          <SignInForm lang={lang} />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2 py-4">
          <Link
            aria-label="reset-password"
            href={`/${lang}/reset-password`}
            className="text-xs text-blue-800 transition-colors duration-300 hover:text-blue-500"
          >
            {signInForm.forgot[lang]}
          </Link>
          <div className="text-xs">
            <span className="me-1 inline-block opacity-70">
              {signInForm.question[lang]}
            </span>
            <Link
              aria-label="Sign up"
              href={`/${lang}/sign-up`}
              className="cursor-pointer text-blue-800 transition-colors duration-300 hover:text-blue-500"
            >
              {signInForm.link[lang]}
            </Link>
          </div>
        </CardFooter>
      </Card>
      <div className="relative hidden h-full w-[40vw] flex-row md:flex xl:w-[30vw]">
        <div className="absolute end-0 top-1/2 translate-y-[-60%]">
          <LoginMobile />
        </div>
        <div className="absolute start-0 top-1/2 translate-y-[-40%]">
          <LoginLady />
        </div>
      </div>
    </main>
  );
};

export default SignInPage;

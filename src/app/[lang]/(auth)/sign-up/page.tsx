"use client";

import { useState } from "react";
import Link from "next/link";

import { firstSignUpForm } from "@/dict/auth/auth.dict";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SingUpLady } from "@/components/artworks/auth/sign-up-lady.artwork";
import { FirstSignUpForm } from "@/components/forms/sign-up-form-first";
import { SecondSignUpForm } from "@/components/forms/sign-up-form-second";
import { ThirdSignUpForm } from "@/components/forms/sign-up-form-third";

import { type Locale } from "#/i18n.config";

export type SignUpFormStates = "first" | "second" | "third";

const SignUpPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [formState, setFormState] = useState<SignUpFormStates>("first");

  return (
    <main className="flex h-full w-full items-center justify-center gap-10 xl:gap-24">
      <Card className="w-[22rem] border-none bg-white px-5 shadow-lg">
        <CardHeader className="flex items-center justify-center gap-4 py-7">
          <CardTitle className="text-2xl font-extrabold text-purple-primary">
            {firstSignUpForm.title[lang]}
          </CardTitle>
        </CardHeader>
        <CardContent className="">
          {
            {
              first: (
                <FirstSignUpForm lang={lang} setFormState={setFormState} />
              ),
              second: (
                <SecondSignUpForm lang={lang} setFormState={setFormState} />
              ),
              third: (
                <ThirdSignUpForm lang={lang} setFormState={setFormState} />
              ),
            }[formState]
          }
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2 py-4">
          <Link
            aria-label="Sign In"
            href={`/${lang}/sign-in`}
            className="text-xs text-blue-800 transition-colors duration-300 hover:text-blue-500"
          >
            {firstSignUpForm.link[lang]}
          </Link>
        </CardFooter>
      </Card>
      <div className="relative -z-10 hidden h-full w-[40vw] flex-row md:flex">
        <div className="absolute end-0 top-1/2 translate-y-[-50%]">
          <SingUpLady />
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;

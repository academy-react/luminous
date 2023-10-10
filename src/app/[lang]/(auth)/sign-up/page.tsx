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
import FirstSignUpForm from "@/components/forms/sign-up-form-first";
import SecondSignUpForm from "@/components/forms/sign-up-form-second";
import ThirdSignUpForm from "@/components/forms/sign-up-form-third";

import { type Locale } from "#/i18n.config";

export type SignUpFormStates = "first" | "second" | "third";

const SignUpPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const [formState, setFormState] = useState<SignUpFormStates>("first");

  return (
    <main className="flex h-full w-full items-center justify-center">
      <Card className="w-full">
        <CardHeader className="flex items-center justify-center">
          <CardTitle className="text-2xl">
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
        <CardFooter className="flex flex-col items-center justify-center gap-3">
          <Link
            aria-label="Sign In"
            href={`/${lang}/sign-in`}
            className="underline-offset-4 transition-colors hover:underline"
          >
            {firstSignUpForm.link[lang]}
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignUpPage;

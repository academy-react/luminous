"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { thirdSignUpFormDict } from "@/dict/pages/auth.dict";

import {
  thirdSignUpInputSchema,
  type ThirdSignUpInputProps,
} from "@/core/validators";

import { type Locale } from "#/i18n.config";

import { Icons } from "../assets/icons";

export const ThirdSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ThirdSignUpInputProps>({
    resolver: zodResolver(thirdSignUpInputSchema),
  });

  const onSubmit = (data: ThirdSignUpInputProps) => {
    router.push(`/${lang}`);
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Icons.mail}
                  label={thirdSignUpFormDict.email[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} dir="ltr" variant="auth">
          {isLoading && (
            <Icons.loader
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          {thirdSignUpFormDict.button[lang]}
          <span className="sr-only">{thirdSignUpFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

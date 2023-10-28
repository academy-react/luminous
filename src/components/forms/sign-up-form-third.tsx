"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  thirdSignUpInputValidator,
  type ThirdSignUpInputProps,
} from "@/types/validations/auth.validation";

import "@/dict/auth/auth.dict";

import { useRouter } from "next/navigation";

import { thirdSignUpForm } from "@/dict/auth/auth.dict";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { type Locale } from "#/i18n.config";

import { AnimatedInput } from "../common/animated-input";
import { Button } from "../ui/button";

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
    resolver: zodResolver(thirdSignUpInputValidator),
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
                  Icon={Mail}
                  label={thirdSignUpForm.email[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} dir="ltr" className="border">
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {thirdSignUpForm.button[lang]}
          <span className="sr-only">{thirdSignUpForm.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { AnimatedPasswordInput } from "@/components/elements/common";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import {
  secondSignUpInputValidator,
  type SecondSignUpInputProps,
} from "@/types/validations/auth.validation";
import { secondSignUpFormDict } from "@/dict/pages/auth.dict";

import { type Locale } from "#/i18n.config";

export const SecondSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SecondSignUpInputProps>({
    resolver: zodResolver(secondSignUpInputValidator),
  });

  const onSubmit = (data: SecondSignUpInputProps) => {
    setFormState("third");
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedPasswordInput
                  lang={lang}
                  label={secondSignUpFormDict.code[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} dir="ltr" variant="auth">
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {secondSignUpFormDict.button[lang]}
          <span className="sr-only">{secondSignUpFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

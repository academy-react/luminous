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

import { thirdSignUpForm } from "@/dict/auth/auth.dict";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { AnimatedInput } from "@/components/ui/input";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { type Locale } from "#/i18n.config";

import { Button } from "../ui/button";

const ThirdSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ThirdSignUpInputProps>({
    resolver: zodResolver(thirdSignUpInputValidator),
  });

  const onSubmit = async (data: ThirdSignUpInputProps) => {
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Mail}
                  label={thirdSignUpForm.email[lang]}
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

export default ThirdSignUpForm;

"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  firstSignUpInputValidator,
  type FirstSignUpInputProps,
} from "@/types/validations/auth.validation";
import { firstSignUpForm } from "@/dict/auth/auth.dict";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { AnimatedInput } from "@/components/common/animated-input";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import { type Locale } from "#/i18n.config";

export const FirstSignUpForm = ({
  lang,
  setFormState,
}: {
  lang: Locale;
  setFormState: (state: SignUpFormStates) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FirstSignUpInputProps>({
    resolver: zodResolver(firstSignUpInputValidator),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: FirstSignUpInputProps) => {
    setFormState("second");
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Phone}
                  label={firstSignUpForm.phone[lang]}
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
          {firstSignUpForm.button[lang]}
          <span className="sr-only">{firstSignUpForm.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

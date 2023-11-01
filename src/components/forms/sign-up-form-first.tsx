"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common/animated-input";
import { Button } from "@/components/elements/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui/form";
import { type SignUpFormStates } from "@/app/[lang]/(auth)/sign-up/page";

import {
  firstSignUpInputValidator,
  type FirstSignUpInputProps,
} from "@/types/validations/auth.validation";

import { firstSignUpFormDict } from "@/dict/pages/auth.dict";

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
                  label={firstSignUpFormDict.phone[lang]}
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
          {firstSignUpFormDict.button[lang]}
          <span className="sr-only">{firstSignUpFormDict.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

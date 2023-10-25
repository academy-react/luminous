"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  resetPasswordInputValidator,
  type ResetPasswordInputProps,
} from "@/types/validations/auth.validation";
import { resetPasswordForm } from "@/dict/auth/auth.dict";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { AnimatedInput } from "@/components/ui/input";

import { type Locale } from "#/i18n.config";

import { Button } from "../ui/button";

export const ResetPasswordForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<ResetPasswordInputProps>({
    resolver: zodResolver(resetPasswordInputValidator),
  });

  const onSubmit = (data: ResetPasswordInputProps) => {
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
                  label={resetPasswordForm.email[lang]}
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
          {resetPasswordForm.button[lang]}
          <span className="sr-only">{resetPasswordForm.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

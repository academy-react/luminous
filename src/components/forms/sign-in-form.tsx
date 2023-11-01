"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, User2 } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  AnimatedInput,
  AnimatedPasswordInput,
} from "@/components/elements/common/animated-input";
import { Button } from "@/components/elements/ui/button";
import { Checkbox } from "@/components/elements/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/elements/ui/form";

import {
  signInInputValidator,
  type SignInInputProps,
} from "@/types/validations/auth.validation";

import { signInForm } from "@/dict/auth/auth.dict";

import { type Locale } from "#/i18n.config";

export const SignInForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<SignInInputProps>({
    resolver: zodResolver(signInInputValidator),
    defaultValues: {
      username: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = (data: SignInInputProps) => {
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={User2}
                  label={signInForm.username[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <AnimatedPasswordInput
                  lang={lang}
                  label={signInForm.password[lang]}
                  inputVariant="auth"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center gap-1 space-y-0 text-blue-800">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-2 text-blue-800"
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel className="text-xs">
                  {signInForm.remember[lang]}
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          dir="ltr"
          className="border-2 border-green-600 bg-green-600 text-white transition-colors duration-500 hover:bg-white hover:text-green-600"
        >
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {signInForm.button[lang]}
          <span className="sr-only">{signInForm.button[lang]}</span>
        </Button>
      </form>
    </Form>
  );
};

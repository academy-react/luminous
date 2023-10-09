"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, User2 } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  signInInputValidator,
  type SignInInputProps,
} from "@/types/validations/auth.validation";
import { signInForm } from "@/dict/auth/auth.dict";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { AnimatedInput, AnimatedPasswordInput } from "@/components/ui/input";

import { type Locale } from "#/i18n.config";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const SignInForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInInputProps>({
    resolver: zodResolver(signInInputValidator),
    defaultValues: {
      username: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = async (data: SignInInputProps) => {};

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
            <FormItem className="flex items-center justify-center gap-2 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="leading-none">
                <FormLabel>{signInForm.remember[lang]}</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button disabled={isLoading} dir="ltr" className="border">
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

export default SignInForm;

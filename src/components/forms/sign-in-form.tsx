"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, User2 } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  signInInputValidator,
  type SignInInputs,
} from "@/types/validations/auth.validation";
import { cn } from "@/lib/utils";
import { signInForm } from "@/dict/auth/auth.dict";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { AnimatedInput } from "@/components/ui/input";

import { type Locale } from "#/i18n.config";

import { Button } from "../ui/button";

const SignInForm = ({ lang }: { lang: Locale }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SignInInputs>({
    resolver: zodResolver(signInInputValidator),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignInInputs) => {};

  return (
    <Form {...form}>
      <form
        className=""
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
        {/* <Button disabled={isLoading} dir="ltr">
          {isLoading && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          )}
          {signInForm.button[lang]}
          <span className="sr-only">{signInForm.button[lang]}</span>
        </Button> */}
      </form>
    </Form>
  );
};

export default SignInForm;

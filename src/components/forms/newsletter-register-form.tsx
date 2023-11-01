"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mailbox } from "lucide-react";
import { useForm } from "react-hook-form";

import { AnimatedInput } from "@/components/elements/common";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/elements/ui";

import {
  newsletterRegisterInputValidator,
  type NewsletterRegisterInputProps,
} from "@/types/validations/newsletter.validation";

import { type Locale } from "#/i18n.config";

export const NewsletterRegisterForm = ({ lang }: { lang: Locale }) => {
  const router = useRouter();

  const form = useForm<NewsletterRegisterInputProps>({
    resolver: zodResolver(newsletterRegisterInputValidator),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: NewsletterRegisterInputProps) => {
    router.push(`/${lang}`);
  };

  return (
    <Form {...form}>
      <form onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="md:w-96">
              <FormControl>
                <AnimatedInput
                  lang={lang}
                  Icon={Mailbox}
                  label={"عضویت در خبرنامه"}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

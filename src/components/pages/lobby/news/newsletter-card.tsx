import { NewsletterRegisterForm } from "@/components/forms/newsletter-register-form";

import { type Locale } from "#/i18n.config";

export const NewsletterSection = ({ lang }: { lang: Locale }) => {
  return <NewsletterRegisterForm lang={lang} />;
};

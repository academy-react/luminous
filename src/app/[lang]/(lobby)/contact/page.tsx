import PageAnimationWrapper from "@/components/layout/animation/page-animation-wrapper";

import { type Locale } from "#/i18n.config";

const ContactPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی ارتباط با ما</h1>
    </PageAnimationWrapper>
  );
};

export default ContactPage;

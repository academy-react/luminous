"use client";

import { type Locale } from "#/i18n.config";

const BlogIDPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  return (
    <main className="flex w-full flex-col items-start justify-center gap-8 px-10 pb-10 pt-20 lg:flex-row"></main>
  );
};

export default BlogIDPage;

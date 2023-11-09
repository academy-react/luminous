import { ContentBody, SideBar, UrlBar } from "@/components/pages/details-page";
import {
  CommentSection,
  PostBody,
} from "@/components/pages/details-page/content";
import { LinkSideCard } from "@/components/pages/details-page/side-bar-items";
import { Button, H1 } from "@/components/elements/ui";

import { shortLinkSideCardDict } from "@/dict/dev/details.dict";

import { type Locale } from "#/i18n.config";

const CoursesIDPage = ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: number };
}) => {
  return (
    <main className="container">
      <UrlBar />
      <section className="my-10 flex justify-between gap-x-10">
        <div className="flex w-full flex-col justify-between">
          <div className="">
            <H1 className="text-3xl font-bold">
              آموزش جامع و پروژه‌محور TailwindCSS
            </H1>
            <p className="mt-3.5 line-clamp-4 text-xl font-light">
              tailwind css یک فریم‌ورک Utility First هست، این فریم‌ورک متشکل از
              یک‌سری کلاس‌های آماده ای هست که شما برای پیاده‌سازی هرگونه دیزاینی
              می‌تونید ازش بهره ببرید. توجه کنید که tailwind css هیچ کامپوننت
              آماده‌ای در اختیار شما نمی‌گذارد.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button className="rounded-2xl border-4 border-green-500 bg-green-500 px-5 py-7 text-3xl text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
              شرکت در دوره
            </Button>
            <span className="text-2xl">999,000 تومان</span>
          </div>
        </div>
        <div className="aspect-video h-[360px] rounded-xl bg-indigo-950"></div>
      </section>
      <section className="mt-5 grid grid-cols-3 items-start gap-5">
        <ContentBody>
          <PostBody />
          <CommentSection lang={lang} />
        </ContentBody>
        <SideBar variant="sticky">
          <LinkSideCard lang={lang} link={shortLinkSideCardDict.href} />
        </SideBar>
      </section>
    </main>
  );
};

export default CoursesIDPage;

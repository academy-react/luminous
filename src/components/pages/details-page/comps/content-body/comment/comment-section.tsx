import { Button, H3 } from "@/components/elements/ui";

import { commentsDict } from "@/dict/dev/comments.dict";

import { type Locale } from "#/i18n.config";

import { Comment } from "./comment";

export const CommentSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="rounded-xl bg-card px-7 py-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-x-3.5">
          <span className="h-10 w-2.5 rounded-sm bg-pink-500" />
          <H3 className="text-3xl font-bold">نظرات</H3>
        </div>
        <Button className="border-[3px] border-green-500 bg-green-500 text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
          ایجاد نظر جدید
        </Button>
      </div>
      <section className="space-y-5">
        {commentsDict.map((comment, index) => (
          <Comment lang={lang} key={index} comment={comment} />
        ))}
      </section>
    </section>
  );
};

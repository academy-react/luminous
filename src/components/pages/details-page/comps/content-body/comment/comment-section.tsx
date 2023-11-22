import { Comment } from "@/components/pages/details-page/comps/content-body/comment/comment";
import { Button, H3 } from "@/components/elements/ui";

import { getCourseComments } from "@/core/services/api";
import { getNewsComments } from "@/core/services/api/news/get-news-comments.api";

import { type Locale } from "#/i18n.config";

type CommentProps = {
  lang: Locale;
  commentCount: number;
} & (CourseCommentProps | NewsCommentProps);

type CourseCommentProps = {
  typeOf: "course";
  courseId: string;
};

type NewsCommentProps = {
  typeOf: "news";
  newsId: string;
};

export const CommentSection = async (props: CommentProps) => {
  const { lang, commentCount, typeOf } = props;

  const comments = [];

  if (typeOf === "course") {
    const courseComments =
      commentCount > 0 ? await getCourseComments(props.courseId) : [];

    comments.push(...courseComments);
  } else if (typeOf === "news") {
    const newsComments =
      commentCount > 0 ? await getNewsComments(props.newsId) : [];

    comments.push(...newsComments);
  }

  return (
    <section className="rounded-xl bg-card px-7 py-6">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-x-3.5">
          <span className="h-10 w-2.5 rounded-sm bg-pink-500" />
          <H3 className="text-3xl font-bold">
            {
              {
                en: "Comments",
                fa: "نظرات",
              }[lang]
            }
          </H3>
        </div>
        <Button className="border-[3px] border-green-500 bg-green-500 text-white transition-colors duration-500 hover:bg-transparent hover:text-green-500">
          {
            {
              en: "Add Comment",
              fa: "ایجاد نظر جدید",
            }[lang]
          }
        </Button>
      </div>
      {comments.length > 0 ? (
        <section className="space-y-5">
          {comments.map((comment, index) => (
            <Comment lang={lang} key={index} comment={comment} />
          ))}
        </section>
      ) : (
        <p>
          {
            {
              en: "There are no comments yet.",
              fa: "هنوز نظری ثبت نشده است.",
            }[lang]
          }
        </p>
      )}
    </section>
  );
};

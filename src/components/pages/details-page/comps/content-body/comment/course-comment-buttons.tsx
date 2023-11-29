"use client";

import { Button } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

import { type CourseCommentType } from "@/core/validators/api";
import {
  courseCommentDissLikeAction,
  courseCommentLikeAction,
} from "@/lib/actions/comment.action";
import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const CourseCommentButtons = ({
  lang,
  data,
}: {
  lang: Locale;
  data: CourseCommentType;
}) => {
  const { id: commentId, courseId, currentUserEmotion } = data;

  const likeAction = async () => {
    const res = await courseCommentLikeAction(courseId, commentId, lang);

    console.log(res);
  };

  const dissLikeAction = async () => {
    const res = await courseCommentDissLikeAction(courseId, commentId, lang);

    console.log(res);
  };

  return (
    <div className="flex gap-2">
      <Button className="h-5 p-0">
        <Icons.thumbsDown
          className={cn(
            "h-5 w-5 text-slate-600 transition-all duration-500 hover:fill-slate-600",
            currentUserEmotion === "DISSLIKED" && "fill-slate-600"
          )}
          onClick={() => void dissLikeAction()}
        />
      </Button>
      <Button className="h-5 p-0">
        <Icons.thumbsUp
          className={cn(
            "h-5 w-5 text-slate-600 transition-all duration-500 hover:fill-slate-600",
            currentUserEmotion === "LIKED" && "fill-slate-600"
          )}
          onClick={() => void likeAction()}
        />
      </Button>
      <Button className="h-5 p-0">
        <Icons.reply
          className={cn(
            "h-5 w-5 text-slate-600 transition-colors duration-500 hover:text-slate-400",
            lang === "en" && "-scale-x-100"
          )}
        />
      </Button>
    </div>
  );
};

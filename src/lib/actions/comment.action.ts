"use server";

import { revalidatePath } from "next/cache";

import { addCourseCommentLike } from "@/core/services/api/course/post/post-course-comment-like.api";

import { type Locale } from "#/i18n.config";

export const courseCommentLikeAction = async (
  courseId: string,
  commentId: string,
  lang: Locale
) => {
  console.log(commentId);
  
  const res = await addCourseCommentLike(commentId);

  console.log(res);

  revalidatePath(`${lang}/courses/${courseId}`);

  return res;
};

export const courseCommentDissLikeAction = async (
  courseId: string,
  commentId: string,
  lang: Locale
) => {
  console.log(commentId);
  
  const res = await addCourseCommentLike(commentId);

  console.log(res);

  revalidatePath(`${lang}/courses/${courseId}`);

  return res;
};


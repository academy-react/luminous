"use server";

import { revalidatePath } from "next/cache";

import {
  addCourseCommentDissLike,
  addCourseCommentLike,
  addCourseLike,
} from "@/core/services/api";

import { type Locale } from "#/i18n.config";

export const courseLikeAction = async (courseId: string, lang: Locale) => {
  const res = await addCourseLike(courseId);

  revalidatePath(`${lang}/courses/${courseId}`);

  return res;
};

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
  const res = await addCourseCommentDissLike(commentId);

  revalidatePath(`${lang}/courses/${courseId}`);

  return res;
};

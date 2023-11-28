"use server";

import http from "@/core/services/interceptor";
import { courseRatingResponseSchema } from "@/core/validators/api";

export const setCourseRatting = async (id: string, rating: number) => {
  const response = await http.post(
    `/Course/SetCourseRating?CourseId=${id}&RateNumber=${rating}`
  );

  const parsedResult = courseRatingResponseSchema.safeParse(response.data); 

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};

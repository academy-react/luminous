'use server';
import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";

export const setCourseRatting = async (id:string,rating:number,) => {
  const response = await http.post(
   `/Course/SetCourseRating?CourseId=${id}&RateNumber=${rating}`
  );

  const parsedResult = courseByPaginationSchema.safeParse(response.data);//change schema

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
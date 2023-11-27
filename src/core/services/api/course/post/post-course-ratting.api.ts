import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";

export const setCourseRatting = async (obj) => {
  const response = await http.post(
    `/Course/SetCourseRating?CourseId=${1}&RateNumber=${3}`
  );

  const parsedResult = courseByPaginationSchema.safeParse(response.data); //change schema

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};

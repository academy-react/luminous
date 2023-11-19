import http from "@/core/services/interceptor";
import { coursePaginationListSchema} from "@/core/validators/api";

export const setCourseRatting = async (obj) => {
  const response = await http.post(
   `/Course/SetCourseRating?CourseId=${1}&RateNumber=${3}`
  );

  const parsedResult = coursePaginationListSchema.safeParse(response.data);//change schema

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";

export const getCoursesByQuery = async (query: string = "") => {
  const response = await http.get(
    `/Home/GetCoursesWithPagination?Query=${query}`
  );

  const parsedResult = courseByPaginationSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

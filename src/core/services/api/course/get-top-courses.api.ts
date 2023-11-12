import http from "@/core/services/interceptor";
import { courseListSchema } from "@/core/validators/api";

export const getTopCoursesList = async (count: number = 5) => {
  const response = await http.get(`/Home/GetCoursesTop?Count=${count}`);

  const parsedResult = courseListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return [];
  }

  return parsedResult.data;
};

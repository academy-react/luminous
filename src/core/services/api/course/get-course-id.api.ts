import http from "@/core/services/interceptor";
import { courseIdSchema } from "@/core/validators/api/course";

export const getCourseById = async (courseId: string) => {
  const response = await http.get(`/Home/GetCourseById?CourseId=${courseId}`);
  
  const parsedResult = courseIdSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};

import http from "@/core/services/interceptor";
import { courseCategoriesSchema } from "@/core/validators/api";

export const getCourseCategories = async () => {
  const response = await http.get("/Home/GetTechnologies");

  const parsedResult = courseCategoriesSchema.safeParse(response.data);
  console.log("result:", parsedResult);
  if (!parsedResult.success) {
    console.error(
      "error in get-course-categories.api",
      parsedResult.error.errors
    );

    return null;
  }

  return parsedResult.data;
};

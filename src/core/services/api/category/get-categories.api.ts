import { categoryListSchema } from '@/core/validators/api/category/category.schema';
import http from "@/core/services/interceptor";

export const getCategories = async () => {
  const response = await http.get("/Home/GetTechnologies");
  const parsedResult = categoryListSchema.safeParse(response.data);
  console.log("parsedResult:", parsedResult)
  console.log("response:", response)

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return [];
  }

  return parsedResult.data;
};
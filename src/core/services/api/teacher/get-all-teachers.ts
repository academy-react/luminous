import http from "@/core/services/interceptor";
import { teacherListSchema } from "@/core/validators/api";

export const getAllTeacher = async () => {
  const response = await http.get("/Home/GetTeachers");
  const parsedResult = teacherListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return [];
  }

  return parsedResult.data;
};
import http from "@/core/services/interceptor";
import { teacherIdSchema } from "@/core/validators/api/teacher";

export const getTeacherById = async (teacherId: string) => {
  const response = await http.get(
    `/Home/GetTeacherDetails?TeacherId=${teacherId}`
  );

  const parsedResult = teacherIdSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-teacher-by-id.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

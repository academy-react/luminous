
import http from "@/core/services/interceptor";
import { newsFilterPagesSchema } from "@/core/validators/api";

export const getNewsByQuery = async (
  query: string = ""
) => {
  const response = await http.get(
    `/News?Query=${query}`
  );

  const parsedResult = newsFilterPagesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
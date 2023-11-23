import http from "@/core/services/interceptor";
import { newsFilterPagesSchema } from "@/core/validators/api";

export const getNewsByQuery = async (query: string = "") => {
  const response = await http.get(`/News?Query=${query}`);

  const parsedResult = newsFilterPagesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-news-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

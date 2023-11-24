import http from "@/core/services/interceptor";
import { newsFilterPagesSchema } from "@/core/validators/api";

export const getCoursesByPagination = async (
  pageNumber: number = 1,
  rowsOfPage: number = 10,
  sortingCol: string = "InsertDate",
  sortType: string = "DESC",
  techCount: number = 0
) => {
  const response = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=${pageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sortingCol}&SortType=${sortType}&TechCount=${techCount}`
  );

  const parsedResult = newsFilterPagesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
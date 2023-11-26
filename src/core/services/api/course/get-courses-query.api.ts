"use server";

import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";
type GetCoursesQueryParams={
  query?: string;
  currentPage?: number;
  rows?:number;
}

export const getCoursesByQuery = async ({currentPage = 0 , rows = 9 , query = ""}:GetCoursesQueryParams = {})=> {
const finalQuery = query!= "" ?`&Query=${query}`: ""

  const response = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=${currentPage}&RowsOfPage=${rows}${finalQuery}`
  );

  const parsedResult = courseByPaginationSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};


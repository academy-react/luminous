"use server";

import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";
import { SortTypeStates } from "@/dict/pages/list.dict";

type GetCoursesQueryParams = {
  query?: string;
  currentPage?: number;
  rows?: number;
  sortCol?: string;
  sortType?: SortTypeStates;
  listTech?:string;
  count?:number;
};

export const getCoursesByPagination = async ({
  currentPage = 0,
  query = "",
  rows = 2,
  sortCol= "cost",  
  sortType= "DESC",
  listTech = "",
  count= 1,
}: GetCoursesQueryParams = {}) => {
  
  const response = await http.get(`/Home/GetCoursesWithPagination`,
  {
    params:{
      PageNumber: currentPage,
      RowsOfPage: rows,
      ...(query  && {Query: query}),
      SortCol: sortCol,
      SortType: sortType,
      ...(listTech  && {ListTech: listTech} ),
      TechCount: count
    }
  }
      );

  const parsedResult = courseByPaginationSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

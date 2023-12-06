import { type SortTypeStates } from "@/dict/pages/list.dict";

import http from "@/core/services/interceptor";
import { allUserCoursesSchema } from "@/core/validators/api";

type GetUserCoursesQueryParams = {
  page?: number;
  rows?: number;
  sortCol?: SortTypeStates;
  sortType?: string;
  query?: string;
};

export const getUserCourses = async ({
  page = 1,
  rows = 2,
  sortCol = "DESC",
  sortType = "LastUpdate",
  query = "",
}: GetUserCoursesQueryParams = {}) => {
  const response = await http.get("/SharePanel/GetMyCourses", {
    params: {
      PageNumber: page,
      RowsOfPage: rows,
      SortCol: sortCol,
      SortType: sortType,
      Query: query,
    },
  });

  const parsedResult = allUserCoursesSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-user-courses.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

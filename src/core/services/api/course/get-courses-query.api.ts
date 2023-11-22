
import http from "@/core/services/interceptor";
import { coursePaginationListSchema} from "@/core/validators/api";

export const getCoursesByQuery = async (currentPage:number = 1, query:string = "",)=> {


  const response = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=${currentPage}${query!= "" && `&Query=${query}`}`
  );

  const parsedResult = coursePaginationListSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};
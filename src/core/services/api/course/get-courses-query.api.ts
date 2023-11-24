import http from "@/core/services/interceptor";
import { courseByPaginationSchema } from "@/core/validators/api";
type GetCoursesQueryParams={
  query?: string;
  currentPage?: number;
}

export const getCoursesByQuery = async ({currentPage = 0 , query = ""}:GetCoursesQueryParams = {})=> {
const finalQuery = query!= "" ?`&Query=${query}`: ""

  const response = await http.get(
    `/Home/GetCoursesWithPagination?PageNumber=${currentPage}${finalQuery}`
  );

  const parsedResult = courseByPaginationSchema.safeParse(response.data);

  if (!parsedResult.success) {
    console.error("error in get-course-query.api", parsedResult.error.errors);

    return null;
  }

  return parsedResult.data;
};

// getCourseByPagination 

// export const getCourseByPagination = async ( query:string = "",)=> {


//   const response = await http.get(
//     `/Home/GetCoursesWithPagination?${query!= "" ?`&Query=${query}`: ""}`
//   );
// const data = response.data;
// console.log("data:" ,data);
// // const totalPages = Math.ceil(data.)

//   const parsedResult = courseByPaginationSchema.safeParse(response.data);

//   if (!parsedResult.success) {
//     console.error("error in get-course-query.api", parsedResult.error.errors);

//     return null;
//   }

//   return parsedResult.data;
// };
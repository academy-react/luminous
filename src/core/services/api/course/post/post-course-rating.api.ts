import http from "@/core/services/interceptor";

export const setCourseRatting = async (
  courseId: string,
  rateNumber: number
) => {
  const response = await http.post("/Course/SetCourseRating", {
    params: {
      CourseId: courseId,
      RateNumber: rateNumber,
    },
  });

  // const parsedResult = courseByPaginationSchema.safeParse(response.data); //change schema

  // if (!parsedResult.success) {
  //   console.error(parsedResult.error);

  //   return null;
  // }

  // return parsedResult.data;
  return null; // temp
};

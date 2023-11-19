import http from "@/core/services/interceptor";
import { coursePaginationListSchema} from "@/core/validators/api";

export const getNewsFilterPages = async (
  pageNumber: number = 1,
  rowsOfPage: number = 10,
  sortingCol: string = "InsertDate",
  sortType: string = "DESC",
  query: string = ""
) => {
  const response = await http.get(
    `/News?PageNumber=${pageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sortingCol}&SortType=${sortType}&Query=${query}`
  );

  const parsedResult = coursePaginationListSchema.safeParse(response.data);
console.log(parsedResult)

  if (!parsedResult.success) {
    console.error(parsedResult.error);

    return null;
  }

  return parsedResult.data;
};


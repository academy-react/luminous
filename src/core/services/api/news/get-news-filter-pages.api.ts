'use server';
import http from "@/core/services/interceptor";
import { newsFilterPagesSchema} from "@/core/validators/api";

type NewsFilterPagesParams = {
  pageNumber?: number;
  rowsOfPage?: number;
  sortingCol?: string;
  sortType?: string;
  query?: string;
};

export const getNewsFilterPages = async ({
  pageNumber = 1,
  query = "",
  rowsOfPage = 10,
  sortType = "DESC",
  sortingCol = "InsertDate",
}: NewsFilterPagesParams = {}) => {
 
  const response = await http.get(
    `/News?PageNumber=${pageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=${sortingCol}&SortType=${sortType}&Query=${query}`
  );

  const parsedResult = newsFilterPagesSchema.safeParse(response.data);
// console.log(parsedResult)

  if (!parsedResult.success) {
    console.error(
      "errors in get-news-filter-page.api",
      parsedResult.error.errors
    );

    return null;
  }
  return parsedResult.data;

  
};


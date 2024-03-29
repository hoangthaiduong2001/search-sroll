import { DefaultError, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IResponseAllData } from "../Types/type";

export const useSearchData = ({
  search,
}: {
  search?: string;
}): UseQueryResult<IResponseAllData, DefaultError> => {
  return useQuery({
    queryKey: ["searchData", search],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      return response.json();
    },
  });
};

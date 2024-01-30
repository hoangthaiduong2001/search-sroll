import { DefaultError, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IResponseAllData } from "../Types/type";

export const useSearchData = ({
  limit,
}: {
  limit: number;
}): UseQueryResult<IResponseAllData, DefaultError> => {
  return useQuery({
    queryKey: ["searchData", limit],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${(limit - 1) * 20}`
      );
      return response.json();
    },
    placeholderData: true,
  });
};

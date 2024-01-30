import { DefaultError, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IResponseAllData } from "../Types/type";

export const useGetAllData = ({
  limit,
}: {
  limit: number;
}): UseQueryResult<IResponseAllData, DefaultError> => {
  return useQuery({
    queryKey: ["getAll", limit],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      return response.json();
    },
  });
};

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import ListCard from "../../Components/ListCard";

const SearchProduct = () => {
  const { search } = useParams();

  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["searchProduct", search],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
      );
      return response.json();
    },
  });
  console.log(data);

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isError) return <p className="error">Error</p>;

  return (
    <>
      {data.products.length > 0 ? (
        <div className="px-5">
          <ListCard card={data?.products} cardCount={0} />
        </div>
      ) : (
        <div className="">No results were found.</div>
      )}
    </>
  );
};

export default SearchProduct;

import { useParams } from "react-router-dom";

import { BeatLoader } from "react-spinners";
import ListCard from "../../Components/ListCard";
import { useSearchData } from "../../hooks/searchData.hooks";

const SearchProduct = () => {
  const { search } = useParams();

  const { data, isLoading, isError } = useSearchData({ search: search });

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isError) return <p className="error">Error</p>;

  return (
    <>
      {data && data.products.length > 0 ? (
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

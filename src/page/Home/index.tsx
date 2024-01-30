import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import ListCard from "../../Components/ListCard";
import { useGetAllData } from "../../hooks/getAllData.hooks";
import { useSearchData } from "../../hooks/searchData.hooks";

const Home = () => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);

  const { data: dataAll } = useGetAllData({ limit: limit });

  const { data, isLoading, isError } = useSearchData({ limit: limit });

  useEffect(() => {
    if (data?.products) {
      let lengthData = products.length + data.products.length;
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      if (lengthData === dataAll?.products.length) {
        setHasMore(false);
      }
    }
  }, [limit, data]);

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isError) return <p className="error">Error</p>;

  return (
    <div className="px-10">
      <InfiniteScroll
        next={() => setLimit((prevLimit) => prevLimit + 1)}
        hasMore={hasMore}
        loader={<BeatLoader color="#36d7b7" />}
        dataLength={products.length}
      >
        <ListCard card={products} cardCount={0} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;

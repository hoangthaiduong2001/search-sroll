import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import ListCard from "../../Components/ListCard";

const Home = () => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["getAllProducts", page],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${page * 10}`
      );
      return response.json();
    },
  });
  console.log(data);

  useEffect(() => {
    if (data?.length === 0) {
      setHasMore(false);
    }
  }, [page, data]);

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isError) return <p className="error">Error :(</p>;

  return (
    <div className="">
      <div className="">
        <div className="">
          <span className="">Item</span>
          <div className="">{data.limit}</div>
        </div>
        <div className="">
          <InfiniteScroll
            next={() => setPage((prevPage) => prevPage + 1)}
            hasMore={hasMore}
            loader={<BeatLoader color="#36d7b7" />}
            dataLength={data?.products?.length || 0}
          >
            <ListCard card={data?.products} cardCount={0} />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;

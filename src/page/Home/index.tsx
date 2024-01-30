import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import ListCard from "../../Components/ListCard";

const Home = () => {
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [products, setProducts] = useState<any[]>([]);

  const { data: dataAll } = useQuery<any>({
    queryKey: ["getAll", page],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      return response.json();
    },
  });
  const { data, isLoading, isError } = useQuery<any>({
    queryKey: ["getAllProducts", page],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${(page - 1) * 20}`
      );
      return response.json();
    },
    placeholderData: true,
  });

  useEffect(() => {
    if (data?.products) {
      let lengthData = products.length + data.products.length;
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      if (lengthData === dataAll?.products.length) {
        setHasMore(false);
      }
    }
  }, [page, data]);

  if (isLoading) return <BeatLoader color="#36d7b7" />;
  if (isError) return <p className="error">Error</p>;

  return (
    <div className="px-10">
      <InfiniteScroll
        next={() => setPage((prevPage) => prevPage + 1)}
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

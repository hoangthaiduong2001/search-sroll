import React, { startTransition, useEffect, useRef, useState } from "react";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import Search from "../../Components/Search";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchValue(e.target.value);
    });
  };

  useEffect(() => {
    if (searchValue) {
      navigate({
        pathname: `/search/${searchValue}`,
      });
    } else if (searchValue === "") {
      navigate({
        pathname: `/search/`,
      });
    }
  }, [searchValue]);
  return (
    <>
      <nav className="">
        <div className="relative flex justify-center items-center">
          <IoHome
            size={30}
            className="absolute cursor-pointer mr-[700px]"
            onClick={() => {
              navigate("/");
            }}
          />
          <Search
            searchValue={searchValue}
            handleChange={handleSearchInput}
            ref={inputRef}
          />
          <GrClose
            size={15}
            className="absolute ml-[500px] cursor-pointer"
            onClick={() => {
              setSearchValue("");
              navigate("/search/");
            }}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

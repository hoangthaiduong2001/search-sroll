import React from "react";
import { ISearchProps } from "../../Types/type";

const Search = React.forwardRef<HTMLInputElement, ISearchProps>(
  ({ searchValue, handleChange }, ref) => {
    return (
      <input
        className=""
        type="search"
        ref={ref}
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      />
    );
  }
);

export default Search;

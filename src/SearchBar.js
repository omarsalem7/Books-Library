import CloseSearchBtn from "./CloseSearchBtn";
import SearchInput from "./SearchInput";
import React from "react";
const SearchBar = ({ onSearch, onResetSearch }) => (
  <div className="search-books-bar">
    <CloseSearchBtn onResetSearch={onResetSearch} />
    <SearchInput onSearch={onSearch} />
  </div>
);
export default SearchBar;

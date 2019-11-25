import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchWrapper } from "./SearchStyle";
export default function SearchHotels() {
  const [search, setSearch] = useState("");
  const handleSearchData = e => {
    setSearch(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    setSearch("");
  };
  return (
    <SearchWrapper>
      <form action="" onSubmit={handleFormSubmit}>
        <FaSearch />
        <input
          type="text"
          onChange={handleSearchData}
          value={search}
          placeholder="Search Best Hotels Near You"
        />
      </form>
    </SearchWrapper>
  );
}

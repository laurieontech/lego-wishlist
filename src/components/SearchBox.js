import React, { useState } from "react";
import { searchSets } from "../services";

const SearchBox = ({ setLegoList }) => {
  const [searchTerm, setSearchTerm] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    searchSets(searchTerm).then((results) => {
      setLegoList(results);
    });
  };

  return (
    <form className="form">
      <input
        placeholder="Search"
        aria-label="search"
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;

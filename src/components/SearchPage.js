import React, { useState } from "react";
import LEGOList from "./LEGOList";
import SearchBox from "./SearchBox";

const SearchPage = () => {
  const [legoList, setLegoList] = useState([]);
  return (
    <div>
      <SearchBox setLegoList={setLegoList} />
      {legoList && <LEGOList legoList={legoList} />}
    </div>
  );
};

export default SearchPage;

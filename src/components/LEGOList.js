import React, { useState, useEffect } from "react";
import { fetchWishlist } from "../services";
import LEGOSet from "./LEGOSet";

const LEGOList = ({ legoList }) => {
  const [wishListSets, setWishListSets] = useState([]);
  const [wishListSetNums, setWishListSetNums] = useState([]);

  useEffect(() => {
    fetchWishlist().then((result) => setWishListSets(result));
  }, []);

  useEffect(() => {
    setWishListSetNums(wishListSets.map(({ set }) => set.set_num));
  }, [wishListSets]);

  return (
    <div>
      <div className="lego-list">
        {legoList?.map((set) => (
          <LEGOSet
            key={set.set_url}
            set={set}
            wishListSetNums={wishListSetNums}
          />
        ))}
      </div>
    </div>
  );
};

export default LEGOList;

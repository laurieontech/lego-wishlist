import React from "react";
import { addSetToList } from "../services";

const WishListButton = ({ setNum, setIsOnWishList }) => {
  const addToWishlist = () => {
    addSetToList(setNum).then(() => setIsOnWishList(true));
  };

  return (
    <button className="wishlist-button" onClick={addToWishlist}>
      Add to Wishlist
    </button>
  );
};

export default WishListButton;

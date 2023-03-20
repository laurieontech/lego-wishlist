import React, { useEffect, useState } from "react";
import WishListButton from "./WishListButton";

const LEGOSet = ({ set, wishListSetNums }) => {
  const [isOnWishList, setIsOnWishList] = useState(false);

  useEffect(() => {
    setIsOnWishList(wishListSetNums.includes(set.set_num));
  }, [wishListSetNums, set]);

  return (
    <div className="lego-set">
      <img alt={set.set_url} src={set.set_img_url} />
      <a href={set.set_url}>{set.name}</a>
      {!isOnWishList && (
        <WishListButton
          setNum={set.set_num}
          setIsOnWishList={setIsOnWishList}
        />
      )}
    </div>
  );
};

export default LEGOSet;

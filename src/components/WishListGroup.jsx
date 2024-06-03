import { ecommerceContext } from "@/contexts/EProvider";
import React, { useContext } from "react";
import WishList from "./WishList";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const WishListGroup = () => {
  const { wishList } = useContext(ecommerceContext);
  return (
    <div className="mt-[120px] container mb-16">
      <h1 className="font-bold text-2xl mb-5">Your WishList</h1>
      {wishList.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[60dvh] gap-4">
          <h1 className="text-4xl">There is no list</h1>
          <NavLink to="shop">
            <Button>Continue Shopping</Button>
          </NavLink>
        </div>
      )}
      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-4 gap-1 ">
        {wishList &&
          wishList.map((wishList) => (
            <WishList key={wishList.id} wishList={wishList} />
          ))}
      </div>
    </div>
  );
};

export default WishListGroup;

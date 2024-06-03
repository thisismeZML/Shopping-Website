import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { ecommerceContext } from "@/contexts/EProvider";

const NavBar = () => {
  const { cartProduct, cartDrawer, wishList } = useContext(ecommerceContext);
  return (
    <div className="py-8 shadow border-b fixed top-0 w-full z-20 bg-white ">
      <div className="container flex justify-between">
        <NavLink to="/">
          <p className="font-bold text-2xl tracking-wider">StoreHub.</p>
        </NavLink>
        <div className="md:flex items-center gap-5 text-lg hidden">
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="viewcart">View Cart</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <NavLink to="/wishlist">
            <button>
              <div className="bg-zinc-100 p-2 rounded-full relative">
                <IoMdHeart className="text-xl" />
                <p className="absolute -top-3 -right-2 text-sm bg-red-500 py-0 px-1.5 rounded-full text-white">
                  {wishList.length}
                </p>
              </div>
            </button>
          </NavLink>
          <NavLink>
            <button onClick={cartDrawer}>
              <div className="bg-zinc-100 p-2 rounded-full relative">
                <IoCart className="text-xl" />
                <p className="absolute -top-3 -right-2 text-sm bg-red-500 py-0 px-1.5 rounded-full text-white">
                  {cartProduct.length}
                </p>
              </div>
            </button>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;

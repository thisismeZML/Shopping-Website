import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdRemoveRedEye } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HiOutlineXMark } from "react-icons/hi2";
import { ecommerceContext } from "@/contexts/EProvider";

const WishList = ({ wishList: { id, image, title, price } }) => {
  const { removeWishList, addToCart } = useContext(ecommerceContext);

  const addCart = () => {
    const quantity = 1;
    const cost = price * quantity;

    const newCart = {
      id,
      image,
      title,
      price,
      cost,
      quantity,
    };

    addToCart(newCart);
  };
  return (
    <div className=" p-3 flex flex-col gap-2">
      <div className="overflow-hidden group p-10 relative duration-300 shadow w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img
            src={image}
            alt={title}
            className="md:h-[150px] xl:w-auto group-hover:scale-110 duration-300"
          />
        </div>
        <div className=" duration-300 absolute top-0 -right-[100px] group-hover:right-0 flex flex-col p-2  gap-2">
          <NavLink>
            <button onClick={() => removeWishList(id)}>
              <div className="bg-red-500 w-11 h-11 flex items-center justify-center shadow-2xl">
                <HiOutlineXMark className="text-xl text-white" />
              </div>
            </button>
          </NavLink>
          <NavLink to={`product/${id}`}>
            <button>
              <div className="bg-white w-11 h-11 flex items-center justify-center shadow-2xl">
                <MdRemoveRedEye />
              </div>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 px-3">
        <div className="flex flex-col gap-2">
          <h3 className=" line-clamp-1 font-bold">{title}</h3>
          <p className="font-mono tracking-tighter font-bold text-zinc-400">
            ${price}
          </p>
        </div>
        <button onClick={addCart}>
          <div className="bg-zinc-100 p-2 rounded-full">
            <FaCartShopping />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WishList;

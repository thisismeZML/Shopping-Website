import { ecommerceContext } from "@/contexts/EProvider";
import React, { useContext } from "react";
import { HiXMark } from "react-icons/hi2";
import { FiMinus, FiPlus } from "react-icons/fi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const CartDrawer = () => {
  const {
    isCartOpen,
    cartDrawer,
    cartProduct,
    deleteCart,
    updateQuantity,
    total,
  } = useContext(ecommerceContext);

  const subQuan = (quantity, id) => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full md:w-[450px] bg-white z-50 p-9 shadow-2xl duration-300 flex flex-col gap-10 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <button onClick={cartDrawer}>
          <HiXMark size={28} />
        </button>
      </div>
      {cartProduct.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[70dvh] gap-4">
          <h1 className="text-3xl">Your Cart is Empty</h1>
          <NavLink to="shop">
            <Button variant="outline">Continue Shopping</Button>
          </NavLink>
        </div>
      )}
      <div className="flex flex-col gap-10 overflow-auto h-full hide-scrollbar">
        {cartProduct &&
          cartProduct.map((cart) => (
            <div key={cart.id} className="grid grid-cols-3 items-center gap-4">
              <div className="col-span-1">
                <img src={cart.image} className="h-20" alt="" />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <p className="text-sm line-clamp-1">{cart.title}</p>
                <p className="font-bold">${cart.cost}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 border py-1 text-sm text-zinc-600 px-1.5">
                    <button onClick={() => subQuan(cart.quantity, cart.id)}>
                      <FiMinus />
                    </button>
                    <span>{cart.quantity}</span>
                    <button onClick={() => updateQuantity(cart.id, 1)}>
                      <FiPlus />
                    </button>
                  </div>
                  <button onClick={() => deleteCart(cart.id)}>
                    <HiOutlineXMark />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p>Subtotal :</p>
          <p>${total}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <NavLink className="w-full" to="viewcart">
            <Button className="w-full" variant="secondary">
              View Cart
            </Button>
          </NavLink>
          <NavLink className="w-full">
            <Button className="w-full">Checkout</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;

import React, { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ecommerceContext = createContext();

const EProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [wishList, setWishList] = useState([]);
  const [wishAlreadyAdded, setWishAlreadyAdded] = useState(false);

  const cartDrawer = () => {
    setIsCartOpen(!isCartOpen);
  };

  const updateFilter = (cat) => {
    setFilterProduct(products.filter((product) => product.category === cat));
  };

  const emptyCart = () => {
    setCartProduct([]);
  };

  const addToCart = (newCart) => {
    if (newCart) {
      setCartProduct((prevCartProduct) => {
        const existingProduct = prevCartProduct.find(
          (cart) => cart.id === newCart.id
        );
        if (existingProduct) {
          return prevCartProduct.map((cart) =>
            cart.id === newCart.id
              ? { ...cart, quantity: cart.quantity + 1 }
              : cart
          );
        } else {
          return [...prevCartProduct, { ...newCart, quantity: 1 }];
        }
      });
    }
  };

  const deleteCart = (id) => {
    setCartProduct(cartProduct.filter((cart) => cart.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCartProduct(
      cartProduct.map((cart) => {
        if (cart.id === id) {
          const quantity = cart.quantity + amount;
          const cost = Math.round(cart.price * quantity * 100) / 100;

          return { ...cart, quantity, cost };
        }
        return cart;
      })
    );
  };

  useEffect(() => {
    const totalCost = cartProduct.reduce(
      (pv, cv) => pv + cv.price * cv.quantity,
      0
    );
    setTotal(Math.round(totalCost * 100) / 100); // Round to two decimal places
  }, [cartProduct]);

  const addWishList = (newWish) => {
    if (newWish) {
      setWishList((prevWishProduct) => {
        const exstingWish = prevWishProduct.find(
          (wish) => wish.id === newWish.id
        );
        if (exstingWish) {
          setWishAlreadyAdded(true);
          return prevWishProduct;
        } else {
          setWishAlreadyAdded(false);
          return [...prevWishProduct, newWish];
        }
      });
    }
  };

  useEffect(() => {
    if (wishAlreadyAdded) {
      toast("Already Added", {
        icon: "👏",
      });
    }
  }, [wishAlreadyAdded]);

  const removeWishList = (id) => {
    setWishList(wishList.filter((wish) => wish.id !== id));
  };

  return (
    <ecommerceContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        filterProduct,
        updateFilter,
        cartProduct,
        setCartProduct,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        cartDrawer,
        deleteCart,
        updateQuantity,
        total,
        wishList,
        setWishList,
        addWishList,
        removeWishList,
        emptyCart
      }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};

export default EProvider;

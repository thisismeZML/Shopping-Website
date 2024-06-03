import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import NavBar from "./components/NavBar";
import ProductShop from "./components/ProductShop";
import CartDrawer from "./components/CartDrawer";
import WishListGroup from "./components/WishListGroup";
import { Toaster } from "react-hot-toast";
import ViewCart from "./components/ViewCart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-hidden flex flex-col min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="shop" element={<ProductShop />} />
          <Route path="shop/product/:id" element={<ProductDetail />} />
          <Route path="wishlist" element={<WishListGroup />} />
          <Route path="wishlist/shop" element={<ProductShop />} />
          <Route path="wishlist/shop/product/:id" element={<ProductDetail />} />
          <Route path="wishlist/product/:id" element={<ProductDetail />} />
          <Route path="viewcart" element={<ViewCart />} />
          <Route path="viewcart/shop" element={<ProductShop />} />
          <Route path="viewcart/shop/product/:id" element={<ProductDetail/>}/>
        </Routes>
        <CartDrawer />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;

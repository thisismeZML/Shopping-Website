import { baseUrl } from "@/config/config";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import { Button } from "./ui/button";
import DetailSke from "./DetailSke";
import { ecommerceContext } from "@/contexts/EProvider";

const ProductDetail = () => {
  const { id } = useParams();
  const [detailProduct, setDetailProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { products, addToCart, addWishList } = useContext(ecommerceContext);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/${id}`);
        setDetailProduct(res.data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductDetail();
  }, []);


  const handleAdd = async () => {
    const res = await axios.get(`${baseUrl}/${id}`);
    const currentProduct = res.data.product;

    const quantity = 1;
    const cost = currentProduct.price * quantity;
    const newCart = {
      id: currentProduct.id,
      price: currentProduct.price,
      title: currentProduct.title,
      cost,
      quantity,
      image: currentProduct.image,
    };

    addToCart(newCart);
  };

  const handleWish = async () => {
    const res = await axios.get(`${baseUrl}/${id}`);
    const currentProduct = res.data.product;

    const newWish = {
      id: currentProduct.id,
      price: currentProduct.price,
      title: currentProduct.title,
      image: currentProduct.image,
    };

    addWishList(newWish);
  };
  const stars = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div
      className="container overflow-hidden"
      style={{ height: "calc(100vh - 64px)" }} // Adjust 64px to match your NavBar height
    >
      {isLoading ? (
        <DetailSke />
      ) : (
        detailProduct && (
          <div className="md:grid md:grid-cols-2 items-center nd:h-full md:gap-5 gap-0 flex flex-col justify-center h-[91dvh]">
            <div className="col-span-1 w-full h-full flex flex-col items-center justify-center">
              <img
                src={detailProduct.image}
                className="md:h-[500px] h-[220px]"
                alt={detailProduct.title || ""}
              />
            </div>
            <div className="w-full col-span-1 md:overflow-auto">
              <div className="flex flex-col gap-2 mb-3">
                <h1 className="font-bold text-2xl">{detailProduct.title}</h1>
                <p className=" line-clamp-4 overflow-auto hide-scrollbar">{detailProduct.description}</p>
                <div className="flex items-center gap-3">
                  <p>{detailProduct.model}</p>
                  <p>({detailProduct.color})</p>
                </div>
                
                <p className="text-xl tracking-wider">${detailProduct.price}</p>
              </div>
              <div className="flex gap-4 items-center">
                <Button onClick={() => handleAdd(id)}>Add To Cart</Button>
                <Button onClick={() => handleWish(id)} variant="outline">
                  Add To WishList
                </Button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductDetail;

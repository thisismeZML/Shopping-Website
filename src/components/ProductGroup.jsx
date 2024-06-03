import { baseUrl } from "@/config/config";
import { ecommerceContext } from "@/contexts/EProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import PaginationCus from "./PaginationCus";
import { NavLink } from "react-router-dom";
import SkeProduct from "./SkeProduct";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductGroup = () => {
  const { products, setProducts, filterProduct, updateFilter } =
    useContext(ecommerceContext);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(baseUrl);
      setProducts(res.data.products);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleBtn = (cat) => {
    updateFilter(cat);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const allProduct = products.filter(
    (product) => product.category === "audio" || product.category === "gaming"
  );

  const indexOfFirstPost = (currentPage - 1) * itemsPerPage;
  const indexOfLastPost = indexOfFirstPost + itemsPerPage;

  const paginatedProducts = (
    filterProduct.length !== 0 ? filterProduct : allProduct
  ).slice(indexOfFirstPost, indexOfLastPost);

  const totalProducts =
    filterProduct.length !== 0 ? filterProduct.length : allProduct.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const skeletons = Array.from({ length: 5 }, (_, index) => index);

  return (
    <div className=" mb-16">
      <div className="container mb-12 text-3xl font-bold flex items-center flex-col justify-center gap-3">
        <h1>Feature Products</h1>
      </div>
      <div data-aos="fade-left" className="container flex items-center justify-between mb-5">
        <div className="flex items-center gap-5">
          <button
            onClick={() => handleBtn("all")}
            className="md:border md:p-2 md:px-4 hover:border-b md:rounded-full border-black text-sm"
          >
            All Arrival
          </button>
          <button
            onClick={() => handleBtn("audio")}
            className="md:border md:p-2 md:px-4 hover:border-b md:rounded-full border-black text-sm"
          >
            Audio
          </button>
          <button
            onClick={() => handleBtn("gaming")}
            className="md:border md:p-2 md:px-4 hover:border-b md:rounded-full border-black text-sm"
          >
            Gaming
          </button>
        </div>
        <NavLink to="/shop">
          <button className="md:bg-red-500 md:text-white md:border md:p-2 md:px-4 md:rounded-full  text-md font-bold text-red-500">
            All Products
          </button>
        </NavLink>
      </div>
      <div data-aos="fade-right" className="container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4 gap-1">
        {isLoading
          ? skeletons.map((_, index) => <SkeProduct key={index} />)
          : paginatedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>
      <div data-aos="fade-up">
        <PaginationCus
          itemsPerPage={itemsPerPage}
          totalPosts={totalProducts}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductGroup;

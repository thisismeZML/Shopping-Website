import { baseUrl } from "@/config/config";
import { ecommerceContext } from "@/contexts/EProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Category from "./Category";
import ShopList from "./ShopList";
import SkeProduct from "./SkeProduct";
import DropDownCat from "./DropDownCat";
import PaginationCus from "./PaginationCus";

const ProductShop = () => {
  const { categories, setCategories } = useContext(ecommerceContext);
  const [shopProducts, setShopProducts] = useState([]);
  const [filterShop, setFilterShop] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, isSelected] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  //searchFilter
  useEffect(() => {
    if (searchTerm) {
      setFilterShop(
        shopProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilterShop(shopProducts);
    }
  }, [searchTerm, shopProducts]);

  //Pagination
  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;
  const currentShop = filterShop.slice(indexOfFirstPost, indexOfLastPost);

  const totalPost = filterShop.length;

  const paginate = (number) => {
    setCurrentPage(number);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/category`);
        setCategories(res.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${baseUrl}?limit=150`);
        setShopProducts(res.data.products);
        setFilterShop(res.data.products); // Initialize filterShop with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
    fetchProduct();
  }, [setCategories]);

  const filterCat = (cat) => {
    if (cat === "All") {
      setFilterShop(shopProducts);
      isSelected("All");
    } else {
      setFilterShop(shopProducts.filter((shop) => shop.category === cat));
      isSelected(cat);
    }
  };

  const skeletons = Array.from({ length: 20 }, (_, index) => index);

  return (
    <div className="container mt-[120px] relative mb-16">
      <div className="flex items-center justify-between lg:justify-end mb-5">
        <div className="flex items-center gap-3">
          <div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="border-b border-zinc-700 placeholder:text-sm p-1 focus-visible:outline-none"
              placeholder="Search..."
            />
          </div>
          <button>
            <IoSearch size={22} />
          </button>
        </div>
        <div className="lg:hidden">
          <DropDownCat
            categories={categories}
            filterCat={filterCat}
            selected={selected}
            isSelected={isSelected}
          />
        </div>
      </div>
      <div className="fixed h-screen top-[11rem] w-[300px] p-5 flex-col gap-5 hidden lg:flex">
        <div>
          <h1 className="text-xl font-bold">Shop StoreHub</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">Categories</h1>
          <ul className="flex flex-col gap-3">
            {!isLoading && (
              <li
                className={`cursor-pointer text-sm px-3 py-2 ${
                  selected === "All" && "bg-black text-white"
                }`}
                onClick={() => filterCat("All")}
              >
                All
              </li>
            )}
            {categories.map((cat, index) => (
              <Category
                key={index}
                cat={cat}
                filterCat={filterCat}
                selected={selected}
                isSelected={isSelected}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:ml-[300px] grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {isLoading
          ? skeletons.map((_, index) => <SkeProduct key={index} />)
          : currentShop.map((product) => (
              <ShopList key={product.id} product={product} />
            ))}
      </div>
      <div className="lg:ml-[300px]">
        <PaginationCus
          itemsPerPage={itemPerPage}
          totalPosts={totalPost}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ProductShop;

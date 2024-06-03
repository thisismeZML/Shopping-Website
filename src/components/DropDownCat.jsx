import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DropDownCat = ({ categories, filterCat, selected }) => {
  const [isBtnOpen, setIsBtnOpen] = useState(false);
  const toggleBtn = () => {
    setIsBtnOpen(!isBtnOpen);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleBtn}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          Category
          <svg
            className={`-mr-1 h-5 w-5 text-gray-400 -rotate-90 duration-300 ${
              isBtnOpen && "rotate-0"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          isBtnOpen ? "opacity-100" : "opacity-0"
        }`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <ul className="py-1" role="none">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
          <li
            className={`cursor-pointer text-sm px-4 py-2 ${
              selected === "All" && "bg-black text-white"
            }`}
            onClick={() => filterCat("All")}
          >
            All
          </li>
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() => filterCat(cat)}
              className={`cursor-pointer text-sm px-4 py-2 ${
                selected === cat && "bg-black text-white"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownCat;

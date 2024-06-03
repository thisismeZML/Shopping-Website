const Category = ({ cat, filterCat, selected }) => {
  
  return (
    
    <li
      onClick={() => filterCat(cat)}
      className={`cursor-pointer text-sm py-2 px-3 duration-200 ${
        selected === cat && "bg-black text-white"
      }`}
    >
      {cat}
    </li>
  );

  
};

export default Category;

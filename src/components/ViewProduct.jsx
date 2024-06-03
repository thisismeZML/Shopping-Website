import React, { useContext } from "react";
import { TableCell, TableRow } from "./ui/table";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { ecommerceContext } from "@/contexts/EProvider";
import { HiXMark } from "react-icons/hi2";

const ViewProduct = ({
  cart: { id, title, image, quantity, cost, price },
  index,
}) => {
  const { deleteCart, updateQuantity } = useContext(ecommerceContext);

  const handleMinus = (quantity, id) => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    }
  };
  return (
    <TableRow className="">
      <TableCell>{index + 1}</TableCell>
      <TableCell className="md:w-[500px] w-full">
        <div className="md:grid md:grid-cols-3 md:items-center gap-3 flex flex-col">
          <div className=" col-span-1">
            <img src={image} className="h-20" alt="" />
          </div>
          <p className=" col-span-2 line-clamp-2  md:line-clamp-none overflow-auto ">
            {title}
          </p>
          <p className="md:hidden">${price}</p>
          <div className="flex items-center rounded-full border p-2 justify-between md:hidden">
            <button onClick={() => handleMinus(quantity, id)}>
              <FiMinus />
            </button>
            <span >{quantity}</span>
            <button onClick={() => updateQuantity(id, 1)}>
              <FiPlus />
            </button>
          </div>
          <p className="md:hidden">${cost}</p>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">${price}</TableCell>
      <TableCell className="hidden md:table-cell">
        <div className="flex items-center rounded-full border p-2 justify-between">
          <button onClick={() => handleMinus(quantity, id)}>
            <FiMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => updateQuantity(id, 1)}>
            <FiPlus />
          </button>
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">${cost}</TableCell>
      <TableCell>
        <button onClick={() => deleteCart(id)}>
          <HiXMark size={20} />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default ViewProduct;

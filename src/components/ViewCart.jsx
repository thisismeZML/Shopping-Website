import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ecommerceContext } from "@/contexts/EProvider";
import ViewProduct from "./ViewProduct";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

const ViewCart = () => {
  const { cartProduct, emptyCart, total } = useContext(ecommerceContext);
  return (
    <div className="mt-[130px] container mb-16">
      {cartProduct.length === 0 ? (
        <div className="h-[70dvh] flex flex-col items-center justify-center gap-4">
          <p className="text-4xl">Your Cart is Empty</p>
          <NavLink to="shop">
            <Button>Go Shopping</Button>
          </NavLink>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div>
            <NavLink to="shop">
              <Button variant="secondary">Continue Shopping</Button>
            </NavLink>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">Quantity</TableHead>
                <TableHead className="hidden md:table-cell">Cost</TableHead>
                <TableHead className=" text-red-700">
                  <button
                    onClick={emptyCart}
                    className="border-b border-red-700 font-bold"
                  >
                    Clear Cart
                  </button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartProduct.map((cart, index) => (
                <ViewProduct key={cart.id} cart={cart} index={index} />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell colSpan={5}>${total}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}
    </div>
  );
};

export default ViewCart;

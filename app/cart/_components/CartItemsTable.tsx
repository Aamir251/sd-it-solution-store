"use client";

import { useCartContext } from "@/ContextProviders/CartContext";
import CartItem from "./CartItem";
import Link from "next/link";


const CartItemsTable = () => {
  const { items } = useCartContext()

  if (!items.length) {
    return <NoItemsFound />
  }

  return (
    <div className="space-y-6 mt-10">
      {
        items.map(item => <CartItem key={item._id} {...item} />)
      }
    </div>
  )
}

export default CartItemsTable


const NoItemsFound = () => {
  return (
    <div className="py-10 flex-center h-56 flex-col gap-y-3 bg-gray-100 mt-10">
      <h3 className="text-black-one text-xl font-semibold">No Items Found</h3>
      <Link className="btn-black block" href={`/category/windows`}>Browse Products</Link>
    </div>
  )
}
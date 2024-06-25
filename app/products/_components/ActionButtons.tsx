"use client";

import { useCartContext } from "@/ContextProviders/CartContext";
import type { CartItem } from "@/types/cart";
import Link from "next/link"

type ActionButtonsProps = CartItem

const ActionButtons = (props : ActionButtonsProps) => {

  const { addItem, deleteItem, updateQty } = useCartContext()

  return (
    <div className="flex gap-x-6 items-center mt-6">
      <Link className="btn-black" href={`/buy-now?${props.slug}`}>
        Buy Now
      </Link>

      <button onClick={() => addItem(props)} className="btn-bottom-border">
        Add To Cart
      </button>
    </div>
  )
}

export default ActionButtons
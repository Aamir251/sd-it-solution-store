"use client";

import { useCartContext } from "@/ContextProviders/CartContext";
import type { CartItem } from "@/types/cart";
import Link from "next/link"
import { useRouter } from "next/navigation";

type ActionButtonsProps = CartItem

const ActionButtons = (props : ActionButtonsProps) => {
  
  const { addItem } = useCartContext()

  const router = useRouter()

  const handleBuyNow = () => {
    addItem(props)

    router.push("/cart")

  }

  return (
    <div className="flex gap-x-6 items-center mt-6">
      <button className="btn-black" onClick={handleBuyNow}>
        Buy Now
      </button>

      <button onClick={() => addItem(props)} className="btn-bottom-border">
        Add To Cart
      </button>
    </div>
  )
}

export default ActionButtons
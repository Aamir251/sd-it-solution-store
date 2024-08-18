"use client"

import { useCartContext } from "@/ContextProviders/CartContext"
import { CartItem } from "@/types/cart"



const AddToCartBtn = (props: CartItem) => {

  const { addItem } = useCartContext()

  return (
    <button onClick={() => addItem({ ...props })} className="btn-bottom-border text-sm text-black-two">
      Add To Cart
    </button>
  )
}

export default AddToCartBtn
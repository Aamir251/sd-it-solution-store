"use client"

import { useCartContext } from "@/ContextProviders/CartContext"
import { addComaToNumber } from "@/utils/cart"

const TotalCost = () => {
  const { items } = useCartContext()

  const totalCost = items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
  
  return (
    <h6 className="text-xl font-bold mt-5">
      <span className="text-gray-500">Total Cost : </span>
      <span className="text-black-two">₹{addComaToNumber(totalCost)}</span>
    </h6>
  )
}

export default TotalCost
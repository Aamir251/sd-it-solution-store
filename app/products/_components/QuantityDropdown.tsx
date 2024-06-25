"use client";

import { ChangeEvent } from "react";

type QuantityDropdownProps = {
  maxQuantity : number
  updateQuantity : (newQuantity: number) => void
}

const QuantityDropdown = ({ maxQuantity, updateQuantity } : QuantityDropdownProps) => {
  
  const maxOrderQuantityToShow : number = maxQuantity < 5 ? maxQuantity : maxQuantity >= 10 ? 8 : maxQuantity

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    updateQuantity(Number(e.target.value.trim()))
  }

  return (
    <div className="flex gap-x-1.5 items-center my-3">
    <h5 className="font-semibold">QTY</h5>
    <select onChange={handleChange} className="outline-none px-1 border-0 border-b border-black">
      {
        Array.from({ length : maxOrderQuantityToShow }).map((_, index) => {
          return <option key={index} value={index + 1}>{index + 1}</option>
        })
      }
    </select>
    </div>
  )
}

export default QuantityDropdown
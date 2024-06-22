"use client";

import { ChangeEvent } from "react";

type QuantityDropdownProps = {
  maxQuantity : number
  updateQuantity : (newQuantity: number) => void
}

const QuantityDropdown = ({ maxQuantity, updateQuantity } : QuantityDropdownProps) => {
  
  const maxOrderQuantityToShow : number = maxQuantity < 5 ? maxQuantity : maxQuantity >= 10 ? 8 : maxQuantity

  const handleChange = (e : ChangeEvent<HTMLSelectElement>) => {
    updateQuantity(Number(e.target.value))
  }


  return (
    <select onChange={handleChange}>
      {
        Array.from({ length : maxOrderQuantityToShow }).map((_, index) => {
          return <option key={index} value={index + 1}>{index + 1}</option>
        })
      }
    </select>
  )
}

export default QuantityDropdown
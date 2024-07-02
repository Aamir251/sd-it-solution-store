"use client";

import type { CartItem } from "@/types/cart"
import Image from "next/image"
import Link from "next/link"
import { useCartContext } from "@/ContextProviders/CartContext";
import QuantityDropdown from "@/components/globals/QuantityDropdown";
import { addComaToNumber } from "@/utils/cart";
import dustbinIcon from "@/assets/icons/delete-icon.svg"

const CartItem = ({ _id, name, qty, slug, imageUrl, inStock, price } : CartItem) => {
  const { updateQty, deleteItem } = useCartContext()

  const updateQuantity = updateQty.bind(null, _id)

  const total = qty * price

  return (
    <article className="grid grid-cols-[2fr_1fr_1fr_1fr_0.5fr] items-center bg-gray-100 py-6 px-2 rounded-md">
      <h3 className="text-black-two text-sm ">
        <Link href={`/products/${slug}`} className="hover:text-primary-orange font-medium flex gap-x-3 items-center">
          <Image alt={name} src={imageUrl} width={60} height={60} style={{ objectFit : "cover"}} />
          <span>{name}</span>
        </Link>
      </h3>
      <h5>₹{addComaToNumber(price)}</h5>
      <QuantityDropdown defaultValue={qty}  inStock={inStock}  updateQuantity={updateQuantity} />
      <h5>₹{addComaToNumber(total)}</h5>
      <span>
        <Image
          onClick={() => deleteItem(_id)}
          className="cursor-pointer hover:opacity-60"
          src={dustbinIcon} alt="delete item" 
          width={20} height={20} 
          style={{ objectFit : "contain"}} 
        />
      </span>
    </article>
  )
}

export default CartItem
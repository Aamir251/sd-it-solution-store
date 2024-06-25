"use client"

import Image from "next/image";
import CartImage from "@/assets/images/cart-icon.svg"
import { useCartContext } from "@/ContextProviders/CartContext";
import Link from "next/link";

const CartIcon = () => {
  const { items } = useCartContext()
  return (
    <Link href={"/cart"} className="relative cursor-pointer">
      <Image src={CartImage} alt="cart icon" width={30} height={30} style={{ objectFit : "contain"}} />
      <span className="block absolute bg-primary-orange h-5 w-5 -top-2 rounded-full text-xs font-semibold text-white flex-center -right-2">{items.length}</span>
    </Link>
  )
}

export default CartIcon
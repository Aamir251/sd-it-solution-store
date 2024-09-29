"use client"

import Image from "next/image";
import CartImage from "@/assets/images/cart-icon.svg"
import { useCartContext } from "@/ContextProviders/CartContext";
import Link from "next/link";

const CartIcon = () => {
  const { items } = useCartContext()
  return (
    <Link href={"/cart"} className="relative cursor-pointer w-max mt-2 md:mt-0 flex items-center gap-x-2">
      <span className="md:hidden">Cart</span>
      <Image src={CartImage} alt="cart icon" width={25} height={25} style={{ objectFit : "contain"}} />
      <span className="block absolute bg-primary-orange h-5 w-5 -top-2 rounded-full text-xs font-semibold text-white flex-center -right-2">{items.length}</span>
    </Link>
  )
}

export default CartIcon
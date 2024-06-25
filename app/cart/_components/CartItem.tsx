import type { CartItem } from "@/types/cart"
import Image from "next/image"
import Link from "next/link"


const CartItem = ({ _id, name, qty, slug, imageUrl } : CartItem) => {
  return (
    <article className="grid grid-cols-2 items-center bg-gray-100 py-6 px-2 rounded-md">
      <h3 className="text-black-two text-sm ">
        <Link href={`/products/${slug}`} className="hover:text-primary-orange font-medium flex gap-x-3 items-center">
          <Image alt={name} src={imageUrl} width={60} height={60} style={{ objectFit : "cover"}} />
          <span>{name}</span>
        </Link>
      </h3>
      <span className="block">{qty}</span>
     
    </article>
  )
}

export default CartItem
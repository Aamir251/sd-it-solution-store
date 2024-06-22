"use client";

import { checkIfItemAlreadyPresentInCart } from "@/utils/cart";
import Link from "next/link"

type ActionButtonsProps = {
  slug : string
  _id : string
  qty : number

}

const ActionButtons = ({ slug, _id, qty } : ActionButtonsProps) => {

  const addToCart = () => {
    const itemsInLocalStorage = sessionStorage.getItem("sd-cart")
    const existingItems = itemsInLocalStorage ? JSON.parse(itemsInLocalStorage) : []

    const itemsToStore = [...existingItems, { _id, slug, qty }];
    sessionStorage.setItem("sd-cart", JSON.stringify(itemsToStore))

  }
  
  const handleAddToCartClick = () => {
    const alreadyExistsInCart : boolean = checkIfItemAlreadyPresentInCart(_id)

    if (alreadyExistsInCart) {
      alert("item already present in Cart")
      return
    }

    addToCart()
    
  }


  return (
    <div className="flex gap-x-4 items-center">
      <Link className="btn-black" href={`/buy-now?${slug}`}>
        Buy Now
      </Link>

      <button onClick={handleAddToCartClick} className="btn-bottom-border">
        Add To Cart
      </button>
    </div>
  )
}

export default ActionButtons
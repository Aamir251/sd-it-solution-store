import { SessionStorageCartItem } from "@/global"
import { CartItem } from "@/types/cart"
import { Id } from "sanity"

export const checkIfItemAlreadyPresentInCart = (id : Id) : boolean => {
  const itemsInLocalStorage = sessionStorage.getItem("sd-cart")
  const existingItems : SessionStorageCartItem[] = itemsInLocalStorage ? JSON.parse(itemsInLocalStorage) : []
  
  if (!existingItems || !existingItems.length) return false

  return existingItems.some(item  => item._id === id)
}

export const addComaToNumber = (amount : number | string) => {
  return new Intl.NumberFormat('en-IN').format(Number(amount))
}


export const getTotal = (items : CartItem[]) => {
  return items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
}
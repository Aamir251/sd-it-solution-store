import { SessionStorageCartItem } from "@/global"
import { Id } from "sanity"

export const checkIfItemAlreadyPresentInCart = (id : Id) : boolean => {
  const itemsInLocalStorage = sessionStorage.getItem("sd-cart")
  const existingItems : SessionStorageCartItem[] = itemsInLocalStorage ? JSON.parse(itemsInLocalStorage) : []
  
  if (!existingItems || !existingItems.length) return false

  return existingItems.some(item  => item._id === id)
}
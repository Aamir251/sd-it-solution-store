"use client";

import { useSessionStorage } from "@/hooks/useSessionStorage";
import { CartContextType, CartItem } from "@/types/cart";
import { checkIfItemAlreadyPresentInCart } from "@/utils/cart";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { Id } from "sanity";



const initState: CartContextType = {
  items: [],
  addItem: (item: CartItem) => { },
  deleteItem: (id: Id) => { },
  updateQty: (id: Id, newQty: number) => { }
}

const CartContext = createContext<CartContextType>(initState)

const CartContextProvider = ({ children }: PropsWithChildren) => {

  const { data, setData } = useSessionStorage<CartItem[] | []>('sd-cart', [])

  const addItem = (item: CartItem) => {
    const alreadyExistsInCart: boolean = checkIfItemAlreadyPresentInCart(item._id)

    if (alreadyExistsInCart) {
      return
    }

    setData([...data, item])
    toast.success("Item added to cart!")
  }

  const deleteItem = (id: Id) => {
    const filteredItems = data.filter(el => el._id !== id)
    setData(filteredItems)
  }

  const updateQty = (id: Id, newQty: number) => {

    const updatedItems = data.map(item => {

      if (item._id === id) {
        return {
          ...item,
          qty: newQty
        }
      }
      return item
    })

    setData(updatedItems)
  }

  return <CartContext.Provider value={{
    updateQty,
    deleteItem,
    addItem,
    items: data,
  }}>
    {children}
  </CartContext.Provider>
}

export default CartContextProvider;

export const useCartContext = () => {
  const ctx = useContext(CartContext)

  if (ctx === undefined) throw new Error("Context cannot be used outside Provider");

  return ctx
}
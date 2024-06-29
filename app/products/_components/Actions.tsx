"use client"

import ActionButtons from "./ActionButtons"
import { useCallback, useState } from "react";
import type { CartItem } from "@/types/cart";
import QuantityDropdown from "@/components/globals/QuantityDropdown";


type ActionsProps = CartItem

const Actions = (props: ActionsProps) => {

  const [ selectedQuantity, setQuantity ] = useState<number>(1)

  const updateQuantity = useCallback((newQuantity : number) => {
    setQuantity(newQuantity)
  },[])

  const propsToPass : CartItem = { ...props, qty : selectedQuantity}

  return (
    <>
      <QuantityDropdown updateQuantity={updateQuantity} inStock={props.qty} />

      <ActionButtons {...propsToPass} />
    </>
  )
}

export default Actions
"use client"

import { Id, Slug } from "sanity";
import ActionButtons from "./ActionButtons"
import QuantityDropdown from "./QuantityDropdown"
import { useCallback, useState } from "react";


type ActionsProps = {
  _id: Id // id of the product
  quantity: number
  slug : Slug
}

const Actions = (props: ActionsProps) => {
  const [ selectedQuantity, setQuantity ] = useState<number>(1)


  const updateQuantity = useCallback(() => (newQuantity : number) => {
    setQuantity(newQuantity)
  },[])


  return (
    <>
      <QuantityDropdown updateQuantity={updateQuantity} maxQuantity={props.quantity} />

      <ActionButtons
        _id={props._id}
        qty={selectedQuantity}
        slug={props.slug.current}
      />
    </>
  )
}

export default Actions
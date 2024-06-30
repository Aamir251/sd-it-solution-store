"use client"

import { useCartContext } from "@/ContextProviders/CartContext"
import Spinner from "@/components/globals/Spinner"
import { getDiscountValueForCustomer } from "@/sanity/lib/queries"
import { addComaToNumber, getTotal } from "@/utils/cart"
import { Dispatch, SetStateAction, useEffect, useState } from "react"


type OrderDetailsFormProps = {
  email : string
  discount : number
  setDiscount : Dispatch<SetStateAction<number>>
}

const OrderDetailsForm = ({ email, discount,  setDiscount } : OrderDetailsFormProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const { items } = useCartContext()
  
  const finalAmount = getTotal(items) - ((discount/100) * getTotal(items))
  
  useEffect(() => {
    const getDiscountValue = async () => {
      const resp = await getDiscountValueForCustomer(email)
      if (resp && resp.discountEligibility) {
        setDiscount(resp.discountEligibility)
      }
    }
    getDiscountValue()

  }, [])



  return (
    <>
      <h3 className="text-lg font-semibold">Order Summary</h3>
      {
        isLoading ? <Loader /> : <div className="space-y-5">
          <div className="flex gap-x-5 items-center justify-end">
            <h5>Total Items : </h5>
            <span>{items.length}</span>
          </div>
          <div className="bg-gray-100 px-3 py-5 rounded-md">
            {
              items.map(item => (<div key={item._id} className="flex items-center justify-between gap-x-10">
                <div className="flex w-full gap-x-10 items-center">
                  <h5>{item.name}</h5>
                  <span>X</span>
                  <span>{item.qty}</span>
                </div>
                <span>₹{addComaToNumber(item.qty * item.price)}</span>
              </div>))
            }
          </div>
          <div className="flex gap-x-5 items-center justify-end">
            <h5>Discount : </h5>
            <span>{discount ? `${discount}%` : "N/A"}</span>
          </div>
          <div className="flex gap-x-5 items-center justify-end font-bold">
            <h5 className="text-black-two">Final Amount : </h5>
            <span className="text-black">₹{addComaToNumber(finalAmount.toFixed(0))}</span>
          </div>
        </div>
      }
    </>
  )
}

export default OrderDetailsForm


const Loader = () => {
  return (
    <div className="w-full h-72 flex-center flex-col gap-5">
      <p>Fetching Order Details...</p>
      <Spinner />
    </div>
  )
}
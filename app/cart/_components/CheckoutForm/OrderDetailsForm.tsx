"use client"

import { useCartContext } from "@/ContextProviders/CartContext"
import Spinner from "@/components/globals/Spinner"
import { getDiscountValueForCustomer } from "@/sanity/lib/queries"
import { addComaToNumber, getTotal } from "@/utils/cart"
import { Dispatch, SetStateAction, useEffect, useState } from "react"


type OrderDetailsFormProps = {
  email: string
  discount: number
  setDiscount: Dispatch<SetStateAction<number>>
  goBack: () => void
  disableSubmitBtn: boolean
}

const OrderDetailsForm = ({ email, discount, setDiscount, goBack, disableSubmitBtn }: OrderDetailsFormProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const { items } = useCartContext()

  const finalAmount = getTotal(items) - ((discount / 100) * getTotal(items))

  useEffect(() => {
    const getDiscountValue = async () => {
      try {
        setIsLoading(true)
        const resp = await getDiscountValueForCustomer(email)
        if (resp && resp.discountEligibility) {
          setDiscount(resp.discountEligibility)
        }
      } catch (error) {
        console.log({ error })
      } finally {
        setIsLoading(false)
      }
    }
    getDiscountValue()

  }, [email])



  return (
    <>
      <h3 className="text-lg font-semibold">Order Summary</h3>
      {
        isLoading ? <Loader /> : <div className="space-y-5  max-h-[550px] overflow-y-auto p-5">
          <div className="flex gap-x-5 items-center justify-end text-sm">
            <h5>Total Items : </h5>
            <span>{items.length}</span>
          </div>
          <div className="bg-gray-100 px-3 py-5 rounded-md space-y-5 lg:space-y-3 text-sm">
            {
              items.map(item => (<div key={item._id} className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-10 gap-y-2">
                <div className="grid grid-cols-[3fr_0.5fr_0.5fr] lg:grid-cols-[2fr_1fr_1fr]  w-full gap-x-10 items-center">
                  <h5>{item.name}</h5>
                  <span>X</span>
                  <span>{item.qty}</span>
                </div>
                <span className="text-xs lg:text-base">₹{addComaToNumber(item.qty * item.price)}</span>
              </div>))
            }
          </div>
          <div className="flex gap-x-5 items-center justify-end text-sm">
            <h5>Discount : </h5>
            <span>{discount ? `${discount}%` : "N/A"}</span>
          </div>
          <div className="flex gap-x-5 items-center justify-end font-bold text-sm">
            <h5 className="text-black-two">Final Amount : </h5>
            <span className="text-black text-base">₹{addComaToNumber(finalAmount.toFixed(0))}</span>
          </div>

        </div>
      }
      <div className="flex gap-x-12 justify-end pt-10 items-center">
        <button type="button" onClick={goBack} className="btn-bottom-border">Go Back</button>
        <button type="submit" disabled={disableSubmitBtn} aria-disabled={disableSubmitBtn} className={`btn-black ${disableSubmitBtn && "cursor-wait"}`}>Pay Now</button>
      </div>
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
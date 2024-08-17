import { useCartContext } from "@/ContextProviders/CartContext"
import { useSessionStorage } from "@/hooks/useSessionStorage"
import { OrderDoc } from "@/sanity/lib/types"
import { CartItem } from "@/types/cart"
import { createOrderId } from "@/utils/razorpay"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction, useState } from "react"

/**
 * 
 * This is the step 1 form
 */


type UserInfoFormProps = {
  hideForm: () => void
  showStepTwo: () => void
  setEmail: Dispatch<SetStateAction<string>>
}


const UserInfoForm = ({ hideForm, showStepTwo, setEmail }: UserInfoFormProps) => {

  return (

    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
          <h2 className="font-semibold text-xl">Please Fill the details</h2>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex flex-col gap-1.5">
                <label className="text-base">Name*</label>
                <input type="text" name="name" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Your Name" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-base">Email*</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="you@example.com" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-base">Confirm email*</label>
                <input type="email" name="confirm-email" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="you@example.com" required />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-base">Phone*</label>
                <input type="number" name="contact" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="9574561462" required />
              </div>
            </div>
            <div className="flex pt-6 justify-end gap-x-10">
              <button onClick={hideForm} type="button" className="flex w-max justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button onClick={showStepTwo} type="button" className={`btn-black`}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoForm
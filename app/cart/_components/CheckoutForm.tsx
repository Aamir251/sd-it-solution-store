"use client"

import { useCartContext } from "@/ContextProviders/CartContext"
import FullPageLoader from "@/components/globals/FullPageLoader"
import { OrderDoc } from "@/sanity/lib/types"
import { CartItem } from "@/types/cart"
import { createOrderId } from "@/utils/razorpay"
import { createOrderDocInSanity } from "@/utils/sanity"
import { useState } from "react"

type CheckoutFormProps = {
  hideForm: () => void
}

// orderItems : items.map(({ _id, name, qty, price  }) => ({
//   productId : _id,
//   productName : name,
//   quantity : qty,
//   price
// }))

const CheckoutForm = ({ hideForm }: CheckoutFormProps) => {
  const { items } = useCartContext()

  const [isLoading, setIsLoading] = useState(false)
  const [ shouldStopBtn, setShouldStopBtn] = useState(false)

  const processPayment = (items: CartItem[]) => async (e: React.FormEvent<HTMLFormElement>) => {
    setShouldStopBtn(true)
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const name = formData.get("name") as string
      const contact = formData.get("contact") as unknown as number

      const currency = 'INR'
      const amount = items.reduce((prev, curr) => prev + curr.price * curr.qty, 0)
      const notes = {
        name,
        email,
        contact
      }
      const orderId: string = await createOrderId(amount, notes);
      
      const options = {
        key: process.env.NEXT_PUBLIC_RAZOR_KEY_ID,
        amount: parseFloat(amount.toString()) * 100,
        currency: currency,
        name: 'name',
        description: 'description',
        order_id: orderId,
        "notes" : {
          "hello" : "world"
        }, 
        handler: async function (response: any) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
          });
          const res = await result.json();
          if (res.isOk) {
            /**
             * Handle Successful Payment
            */
            setIsLoading(true)
            const orderObj : OrderDoc = {
              orderId,
              customerName : name,
              email,
              _type : "orders",
              contact : Number(contact),
              items : items.map(({ _id, name, qty, price  }) => ({
                productId : _id,
                productName : name,
                quantity : qty,
                price
              }))
            }
            const res = await createOrderDocInSanity(orderObj)
            console.log({ res })
          }
          else {
            alert(res.message);
          }
        },
        prefill: {
          name,
          email,
          contact
        },
        theme: {
          color: '#3399cc',
        },
      };
      const win = window as any
      const paymentObject = new win.Razorpay(options);

      paymentObject.on('payment.failed', function (response: any) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  };

  const handleSubmit = processPayment(items)
  return (
    <div className="fixed top-0 left-0 flex-center h-screen w-screen bg-black/60">
      { isLoading && <FullPageLoader text="Please Wait... Do not refresh the page" /> }
      <form onSubmit={handleSubmit} className="w-11/12 max-w-3xl border bg-white py-10 px-5">
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
                    <input type="email" name="email" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="you@example.com" required />
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
                  <button aria-disabled={shouldStopBtn} disabled={shouldStopBtn} type="submit" className="btn-black">Proceed</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
"use client"

import UserInfoForm from "./UserInfoForm"
import OrderDetailsForm from "./OrderDetailsForm"
import { OrderDoc } from "@/sanity/lib/types"
import { createOrderId } from "@/utils/razorpay"
import { CartItem } from "@/types/cart"
import { Dispatch, useState } from "react"
import { useCartContext } from "@/ContextProviders/CartContext"
import { useSessionStorage } from "@/hooks/useSessionStorage"
import { useRouter } from "next/navigation"
import { getTotal } from "@/utils/cart"

type CheckoutFormProps = {
  hideForm: () => void

}


const CheckoutForm = ({ hideForm }: CheckoutFormProps) => {
  const { items } = useCartContext()
  const { setData: saveOrderItemToSession } = useSessionStorage("sd-order", {})
  const router = useRouter()
  const [ email, setEmail ] = useState<string>("")

  const [stepCount, setStepCount] = useState<1 | 2>(1)

  const showStepTwo = setStepCount.bind(null, 2)
  const showStepOne = setStepCount.bind(null, 1)

  const [ discount, setDiscount ] = useState<number>(0)
  

  const processPayment = (items: CartItem[]) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const name = formData.get("name") as string
      const contact = formData.get("contact") as unknown as number

      const currency = 'INR'
      const amount = getTotal(items) - ((discount/100) * getTotal(items))
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
        "notes": {
          "hello": "world"
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
            const orderObj: OrderDoc = {
              orderId,
              customerName: name,
              email,
              _type: "orders",
              contact: Number(contact),
              items: items.map(({ _id, name, qty, price }) => ({
                productId: _id,
                productName: name,
                quantity: qty,
                price
              }))
            }
            saveOrderItemToSession(orderObj)
            router.push(`/processing-order?orderId=${orderId}`)
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
    }
  };

  const handleSubmit = processPayment(items)

  return (
    <>
      <div className="fixed top-0 left-0 flex-center h-screen w-screen bg-black/60">
        <form onSubmit={handleSubmit} className="w-11/12 max-w-3xl border bg-white py-10 px-5">
          {stepCount === 1 && <UserInfoForm setEmail={setEmail} hideForm={hideForm} showStepTwo={showStepTwo} />}
          {stepCount === 2 && <OrderDetailsForm discount={discount} setDiscount={setDiscount} email={email} />}
        </form>
      </div>
    </>
  )
}

export default CheckoutForm
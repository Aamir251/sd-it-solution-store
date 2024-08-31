"use client"
import { load } from "@cashfreepayments/cashfree-js";

import UserInfoForm from "./UserInfoForm"
import OrderDetailsForm from "./OrderDetailsForm"
import { CartItem } from "@/types/cart"
import { useState } from "react"
import { useCartContext } from "@/ContextProviders/CartContext"
import { useSessionStorage } from "@/hooks/useSessionStorage"
import { useRouter } from "next/navigation"
import { getTotal } from "@/utils/cart"
import FullPageLoader from "@/components/globals/FullPageLoader"

type CheckoutFormProps = {
  hideForm: () => void

}


const CheckoutForm = ({ hideForm }: CheckoutFormProps) => {
  const { items } = useCartContext()
  const { setData: saveOrderItemToSession } = useSessionStorage("sd-order", {})
  const router = useRouter()
  const [email, setEmail] = useState<string>("")

  const [stepCount, setStepCount] = useState<1 | 2>(1)

  const showStepTwo = setStepCount.bind(null, 2)
  const showStepOne = setStepCount.bind(null, 1)

  const [discount, setDiscount] = useState<number>(0)

  const [showOverlay, setShowOverlay] = useState<boolean>(false)

  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false)
  let cashFree: any;


  const initializeSDK = async function () {
    cashFree = await load({
      mode: process.env.NEXT_PUBLIC_CASHFREE_ENVIRONMENT
    });
  }
  const handleOrder = (items: CartItem[]) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowOverlay(true)
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get("email") as string
      const name = formData.get("name") as string
      const contact = formData.get("contact") as unknown as number

      const amount = getTotal(items) - ((discount / 100) * getTotal(items))
      const body = {
        name,
        email,
        contact,
        amount,
        cartItems: items,
      }

      const createOrderResp = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify(body)
      })


      const createOrderData = await createOrderResp.json()


      const paymentSessionId = createOrderData.payment_session_id

      saveOrderItemToSession({ name, email, contact })

      await initializeSDK();

      let checkoutOptions = {
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
      };
      cashFree.checkout(checkoutOptions);



    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = handleOrder(items)

  return (
    <>
      {showOverlay && <FullPageLoader text="Processing Order. Please Do not Refresh or Close." />}
      <div className="fixed top-0 left-0 flex-center h-screen w-screen z-20 bg-black/60">
        <form onSubmit={handleSubmit} className="w-11/12 max-w-3xl border bg-white py-10 px-5">
          <div className={`${stepCount === 1 ? "block" : "hidden"}`}>
            <UserInfoForm setEmail={setEmail} hideForm={hideForm} showStepTwo={showStepTwo} />
          </div>

          {stepCount === 2 && <OrderDetailsForm disableSubmitBtn={disableSubmitBtn} goBack={showStepOne} discount={discount} setDiscount={setDiscount} email={email} />}

        </form>
      </div>
    </>
  )
}

export default CheckoutForm
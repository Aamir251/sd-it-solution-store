"use client"

import { useSessionStorage } from "@/hooks/useSessionStorage";
import { OrderDoc } from "@/sanity/lib/types";
import { createOrderDocInSanity, mutateProductQuantityInSanity } from "@/utils/sanity";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProcessingOrderLoader from "./ProcessingOrderLoader";


type ProcessingOrderProps = {
  orderId : string
}



const ProcessingOrder = ({ orderId } :ProcessingOrderProps ) => {
  const router = useRouter()
  const { data, setData } = useSessionStorage("sd-order", {})
  const { setData : setCartItems } = useSessionStorage("sd-cart", [])
  
  const [ isLoading, setIsLoading ] = useState<boolean>(true)

  const isOrderDoc = (doc : OrderDoc | {}, orderId : string) : doc is OrderDoc => {
    return "orderId" in doc && doc.orderId === orderId
  }

  useEffect(() => {

    const createDocInSanity = async (doc : OrderDoc) => {
      try {
        console.log({ doc })
        setIsLoading(true)
        const { success, message  } = await createOrderDocInSanity(doc)

        if (!success) throw new Error(message);

        // handle success here
        await mutateProductQuantityInSanity(doc.items)
        
      } catch (error) {
        console.log({ error })
      } finally {
        setIsLoading(false)
        router.push(`/order-success?email=${doc.email}&orderId=${doc.orderId}`)
        setData({})
        setCartItems([]) // clear the cart
      }
    }

    if (data && isOrderDoc(data, orderId)) {
      createDocInSanity(data)
    }
  },[data])


  if (isLoading) {
    return <ProcessingOrderLoader />
  }
  return (
    <section className="h-72 flex-center w-full">
      <h3 className="text-2xl font-medium">Processing Order...</h3>
    </section>
  )
}

export default ProcessingOrder
"use client";

import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useEffect, useState } from "react";
import { OrderDoc } from "@/sanity/lib/types";
import { createOrderDocInSanity, mutateProductQuantityInSanity } from "@/utils/sanity";
import ProcessingOrderLoader from "./_components/ProcessingOrderLoader";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

type ProcessingOrderPageProps = {
  searchParams : {
    orderId : string
  }
}

export const metadata: Metadata = {
  title: 'Processing Order',
}

const ProcessingOrderPage = ({ searchParams } : ProcessingOrderPageProps) => {
  
  const router = useRouter()
  const { orderId } = searchParams;
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
    <div>ProcessingOrderPage</div>
  )
}

export default ProcessingOrderPage
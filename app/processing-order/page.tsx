"use client";

import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useEffect, useState } from "react";
import { OrderDoc } from "@/sanity/lib/types";
import { createOrderDocInSanity, mutateProductQuantityInSanity } from "@/utils/sanity";
import ProcessingOrderLoader from "./_components/ProcessingOrderLoader";

type ProcessingOrderPageProps = {
  searchParams : {
    orderId : string
  }
}

const ProcessingOrderPage = ({ searchParams } : ProcessingOrderPageProps) => {
  console.log("mounted ")
  const { orderId } = searchParams;
  const { data, setData } = useSessionStorage("sd-order", {})
  
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
        // setData({})
      }
    }

    console.log({ data, orderId })
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
import { OrderDoc, OrderItem } from "@/sanity/lib/types"


type ReturnType = {
  success : boolean
  message : string
}

export const createOrderDocInSanity = async (order : OrderDoc) : Promise<ReturnType> => {
  try {
    const resp = await fetch("/api/order-doc", {
      method : "POST",
      body : JSON.stringify(order)
    })

    if (resp.ok) {
      return {
        success : true,
        message : "Order Created"
      }
    } else throw new Error(resp.statusText)
  } catch (error : any) {
    return {
      success : false,
      message : error?.response?.data?.message || error?.message
    }
  }

}


export const mutateProductQuantityInSanity = async (items : OrderItem[]) : Promise<ReturnType> => {

  try {
    console.log(items)
    const resp = await fetch("/api/update-quantity", {
      method : "POST",
      body : JSON.stringify(items)
    })

    if (resp.ok) {
      return {
        success : true,
        message : "Order Created"
      }
    } else throw new Error(resp.statusText)
  } catch (error : any) {
    console.log({ error })
    return {
      success : false,
      message : error?.response?.data?.message || error?.message
  
    }
    
  }

}


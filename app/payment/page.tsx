import { getOrderStatus } from "@/utils/payment"
import { redirect } from "next/navigation"
import OrderNotSuccessful from "./_components/OrderNotSuccessful"
import PaymentCancelled from "./_components/PaymentCancelled"
import OrderSuccessful from "./_components/OrderSuccessful"


type OrderSuccessPageProps = {
  searchParams: {
    order_id: string
  }
}

const OrderSuccessPage = async ({ searchParams: { order_id } }: OrderSuccessPageProps) => {

  if (!order_id) {
    redirect("/")
  }

  const orderStatus = await getOrderStatus(order_id)


  if (Array.isArray(orderStatus) && orderStatus.length > 0) {

    const orderData = orderStatus[0]

    if (orderData.payment_status === "SUCCESS") {
      return (
        <OrderSuccessful
          payment_amount={orderData.payment_amount!}
          order_id={order_id}
          payment_time={orderData.payment_time!}
          payment_currency={orderData.payment_currency!}
        />
      )
    }

  } else {
    return <OrderNotSuccessful orderId={order_id} />
  }


  // if (orderData.status === "failure" && orderData.remark === "Transaction cancel by Payee") {
  //   return <PaymentCancelled />
  // }
  // else if (orderData.status === "failure") {
  //   return <OrderNotSuccessful orderId={order_id} />
  // }





  return null

}



export default OrderSuccessPage
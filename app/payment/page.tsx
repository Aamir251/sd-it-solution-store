import Container from "@/components/globals/Container"
import { getOrderStatus } from "@/utils/payment"
import Link from "next/link"
import { redirect } from "next/navigation"
import OrderNotSuccessful from "./_components/OrderNotSuccessful"
import PaymentCancelled from "./_components/PaymentCancelled"
import OrderSuccessful from "./_components/OrderSuccessful"


type OrderSuccessPageProps = {
  searchParams: {
    client_txn_id: string
    txn_id: string
  }
}

const OrderSuccessPage = async ({ searchParams: { client_txn_id, txn_id } }: OrderSuccessPageProps) => {

  if (!client_txn_id || !txn_id) {
    redirect("/")
  }

  const orderStatus = await getOrderStatus(client_txn_id)

  const orderData = orderStatus.data

  console.log({ orderData });


  if (orderData.status === "failure" && orderData.remark === "Transaction cancel by Payee") {
    return <PaymentCancelled />
  }
  else if (orderData.status === "failure") {
    return <OrderNotSuccessful txnId={client_txn_id} />
  }


  if (orderData.status === "success" && orderData.remark === "transaction successful") {
    return (
      <OrderSuccessful name={orderData.customer_name} contact={orderData.customer_mobile} email={orderData.customer_email} />
    )
  }


  return null

}



export default OrderSuccessPage
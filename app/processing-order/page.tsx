import { Metadata } from "next"
import ProcessingOrder from "./_components/ProcessingOrder"

type ProcessingOrderPageProps = {
  searchParams : {
    orderId : string
  }
}

export const metadata: Metadata = {
  title: 'Processing Order',
}

const ProcessingOrderPage = ({ searchParams } : ProcessingOrderPageProps) => {
  
  return <ProcessingOrder orderId={searchParams.orderId} />
}

export default ProcessingOrderPage
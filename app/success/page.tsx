import Container from "@/components/globals/Container"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Order Successful',
}
const OrderSuccessPage = () => {
  return (
    <>
      <Container as="section">
        <h1>Thank you for shopping with us</h1>
      </Container>
    </>
  )
}

export default OrderSuccessPage
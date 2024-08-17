import Container from "@/components/globals/Container"
import Link from "next/link"

const PaymentCancelled = () => {
  return (
    <Container as="article" className="text-center max-w-xl min-h-[85vh] flex-col flex-center gap-y-4">
      <h2 className="text-3xl font-semibold">Payment Cancelled!</h2>
      <p>
        It looks like your payment process was interrupted. No worries—your order was not completed, and no charges have been applied.
      </p>
      <Link href={"/"} className="btn-black">Shop Again!</Link>
    </Container>
  )
}

export default PaymentCancelled
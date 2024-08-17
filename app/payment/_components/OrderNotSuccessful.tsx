import Container from "@/components/globals/Container"
import Link from "next/link"

const OrderNotSuccessful = ({ orderId }: { orderId: string }) => {
  return (
    <Container as="article" className="text-center max-w-xl min-h-[85vh] flex-col flex-center gap-y-4">
      <h2 className="text-3xl font-semibold">Order Not Successful!</h2>
      <p>
        Your order was not Successful. Any money deducted will be refunded automatically within 4 working days.
      </p>
      <p>Feel free to raise reach us on
        <Link href="email:sditsolutionstore@gmail.com" className="text-primary-orange"> sditsolutionstore@gmail.com</Link> or <Link className="text-primary-orange" href={"/contact-us"}>Contact Us</Link>.
      </p>
      <p>Make sure to share this <span className="text-black-one font-semibold">Order ID</span> with us: <span className="font-bold text-primary-orange">{orderId}</span> </p>
      <Link href={"/"} className="btn-black">Shop Again!</Link>
    </Container>
  )
}

export default OrderNotSuccessful
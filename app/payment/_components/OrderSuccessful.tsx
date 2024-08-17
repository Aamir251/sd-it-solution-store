import Container from "@/components/globals/Container"
import Link from "next/link"


type OrderSuccessfulProps = {
  email: string
  contact: string
  name: string
}

const OrderSuccessful = ({ email, contact, name }: OrderSuccessfulProps) => {
  return (
    <Container as="section" className="max-w-xl text-center flex-center flex-col gap-x-7">
      <h1>Hi {name}, Thank you for shopping with us</h1>
      <p>Your order will be delivered via Email. We will reach you on your email: <span className="text-primary-orange font-semibold">{email}</span> or
        on your number: <span className="text-primary-orange font-semibold">{contact}</span>
      </p>
      <Link href={"/"} className="btn-black">Shop More!</Link>
    </Container>
  )
}

export default OrderSuccessful
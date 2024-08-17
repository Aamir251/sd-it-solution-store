"use client";

import Container from "@/components/globals/Container"
import { useSessionStorage } from "@/hooks/useSessionStorage";
import Link from "next/link"


type OrderSuccessfulProps = {
  order_id: string,
  payment_amount: number
  payment_time: string
  payment_currency: string
}

const OrderSuccessful = ({ order_id, payment_amount, payment_time, payment_currency }: OrderSuccessfulProps) => {


  const { data } = useSessionStorage("sd-order", {}) as {
    data: {
      name?: string,
      email?: string,
      contact?: string
    },
  }

  const paymentTime = formatDateString(payment_time)

  return (
    <Container as="section" className="max-w-xl text-center flex-center flex-col gap-y-5 h-dvh">
      <h1 className="text-2xl">Hi {data?.name}, Thank you for shopping with us</h1>
      <p>Your order will be delivered via Email. We will reach you on your email <span className="text-primary-orange font-semibold">  {data?.email && ': ' + data.email}</span> or
        on your number <span className="text-primary-orange font-semibold"> {data?.contact && ': ' + data?.contact}</span>
      </p>

      <ul className="text-left bg-gray-100 p-6">
        <li>Order Id : <span className="font-medium">{order_id}</span></li>
        <li>Payment Amount : <span className="font-medium">{payment_currency} {payment_amount}</span></li>
        <li>payment Time : <span className="font-medium">{paymentTime}</span></li>
      </ul>
      <Link href={"/"} className="btn-black">Continue Shopping</Link>
    </Container>
  )
}

export default OrderSuccessful




function formatDateString(isoDateString: string): string {
  // Parse the ISO date string into a JavaScript Date object
  const date = new Date(isoDateString);

  // Options for formatting date and time
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  // Create a new Intl.DateTimeFormat instance with the desired options
  const formatter = new Intl.DateTimeFormat('en-US', options);

  // Format the date and time
  return formatter.format(date);
}
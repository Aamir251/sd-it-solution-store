import Container from "@/components/globals/Container"
import { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"


type OrderSuccessPageProps = {
  searchParams : {
    orderId : string
    email : string
  }
}


export const metadata: Metadata = {
  title: 'Order Successful',
  description: 'Congratulations! Your order has been successful. Thank you for shopping with us.',
}

const OrderSuccessPage = ({ searchParams } : OrderSuccessPageProps) => {

  const { orderId, email } = searchParams


  if (!orderId || !email) {
    redirect("/")
  }

  return (
    <Container as="section">
      <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-muted/40 px-4 py-12 sm:px-6 md:py-24" >
        <div className="max-w-md w-full space-y-6 text-center" >
          <div className="text-6xl" >🎉</div>
          <h1 className="text-3xl font-bold" >Order Placed Successfully!</h1>
          <p>
            Your order has been placed. <span className="font-medium">You will receive the product on your email - <span className="font-bold font-primary-orange">{email}</span>.</span> 
          </p>
          <p className="text-primary-orange">Please keep this <span className="font-semibold">Order ID</span> for future references.</p>
          <div className="grid gap-2" >
            <p >Order ID: <span className="font-semibold" >{orderId}</span></p>
            <div className="flex items-center justify-center gap-2">
              <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] h-4"></div>
              <Link href="/" className="btn-black flex items-center gap-x-2" rel="ugc">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default OrderSuccessPage
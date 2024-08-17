import Container from "@/components/globals/Container"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | SD IT Solution Store',
  description: 'Review the Cancellation and Refund Policy of SD IT Solution Store. Understand our guidelines for canceling orders and processing refunds to ensure a smooth shopping experience.',
}


const CancellationAndRefundPolicy = () => {
  return (
    <Container>
      <div className="py-20 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-semibold">Cancellation And Refund Policy</h1>
      </div>

      <article className="pb-20 max-w-2xl mx-auto">
        <h5 className="font-bold text-lg mb-3">Last Updated: 7-07-2024</h5>

        <p className="text-gray-800 leading-7 text-sm">
          At SD IT Solution, we strive to provide our customers with the highest quality software products and services. However, we understand that there may be circumstances where you need to cancel an order or request a refund. Please read our Cancellation and Refund Policy carefully to understand your rights and our procedures.
        </p>

        <h3 className="text-2xl font-semibold my-3">1. Cancellation Policy</h3>

        <span className="font-semibold block"> 1.1 Order Cancellation :</span>
        <p className='my-2 text-sm leading-7 text-gray-800'>
          Once an order has been placed and the product key(s) have been delivered to your email, the order cannot be canceled. All sales are final once the product key has been issued.
        </p>

        <span className="font-semibold block">1.2 Pre-Delivery Cancellation:</span>
        <p className='my-2 text-sm leading-7 text-gray-800' >
          If you wish to cancel your order before the product key(s) have been delivered, please contact our support team immediately. We will make every effort to accommodate your request, but we cannot guarantee cancellation once the order process has begun.
        </p>

        <h3 className="text-2xl font-semibold my-3">2. Refund Policy </h3>
        <span className="font-semibold block">2.1 Digital Products:</span> 
        <p className='my-2 text-sm leading-7 text-gray-800'>Due to the nature of digital products, we do not offer refunds once the product key(s) have been delivered. All sales are final.</p>

        <span className="font-semibold block">2.2 Incorrect or Defective Product Keys:</span> 
        <p className='my-2 text-sm leading-7 text-gray-800'>If you receive an incorrect or defective product key, please contact our support team within 7 days of purchase. We will verify the issue and provide a replacement key or refund if necessary.</p>

        <span className="font-semibold block">2.3 Non-Delivery of Product Keys:</span>
        <p className='my-2 text-sm leading-7 text-gray-800' >If you do not receive your product key(s) within 24 hours of purchase, please contact our support team. We will investigate the issue and resend the product key(s) or provide a refund if necessary.</p>

        <h3 className="text-2xl font-semibold my-3">3. Refund Process</h3>

        <span className="font-semibold block">3.1 Requesting a Refund:</span> 
        <p className='my-2 text-sm leading-7 text-gray-800'>To request a refund, please contact our support team at [Your Support Email] with your order details and a description of the issue. Our team will review your request and respond within 3 business days.</p>

        <span className="font-semibold block">3.2 Approval of Refunds:</span> 
        <p className='my-2 text-sm leading-7 text-gray-800'>If your refund request is approved, the refund will be processed to the original payment method within 7-10 business days. You will receive a confirmation email once the refund has been issued.</p>

        <h3 className="font-semibold text-2xl my-3">4. Contact Information</h3>

        <p className='my-2 text-sm leading-7 text-gray-800'>If you have any questions or concerns about our Cancellation and Refund Policy, please contact us at:</p>

        <p className="text-sm space-y-2 text-gray-800">
          <span className="block">SD IT Solution</span>
          <span className="block">Bow Bazar, Jaigaon,</span>
          <span className="block">West Bengal, India</span>
          <span className="block">sditsolutionstore@gmail.com</span>
          <span className="block">+917029126580</span>
      </p>
      </article>
    </Container>
  )
}

export default CancellationAndRefundPolicy
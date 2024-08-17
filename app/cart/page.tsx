import Container from "@/components/globals/Container"
import CartItemsTable from "./_components/CartItemsTable"
import TotalCost from "./_components/TotalCost"
import { Metadata } from "next"



export const metadata: Metadata = {
  title: 'Your Cart | SD IT Solution Store',
  description: 'View and manage the items in your cart at SD IT Solution Store. Review your selected IT software, including Microsoft Windows and Office, and proceed to secure checkout',
}
const CartPage = () => {
  return (
    <Container as="section">
      <h1 className="text-3xl font-semibold mt-10">Cart Items</h1>
      <CartItemsTable />
      <TotalCost />
    </Container>
  )
}

export default CartPage
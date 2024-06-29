import Container from "@/components/globals/Container"
import CartItemsTable from "./_components/CartItemsTable"
import TotalCost from "./_components/TotalCost"
import ProceedToCheckoutBtn from "./_components/ProceedToCheckoutBtn"

const CartPage = () => {
  return (
    <Container as="section">
      <h1 className="text-3xl font-semibold mt-10">Cart Items</h1>
      <CartItemsTable />
      <TotalCost />
      <ProceedToCheckoutBtn />
    </Container>
  )
}

export default CartPage
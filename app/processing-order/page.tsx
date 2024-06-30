
type ProcessingOrderPageProps = {
  params: {
    orderId: string
  }
}

const ProcessingOrderPage = ({ params }: ProcessingOrderPageProps) => {
  console.log({ params })
  return (
    <div>ProcessingOrderPage</div>
  )
}

export default ProcessingOrderPage
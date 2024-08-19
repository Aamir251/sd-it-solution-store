import { changePaymentStatusOfOrder } from "@/sanity/lib/queries";

const handler = async (request: Request) => {
  try {
    const webhookData = await request.json();
    console.log("Webhook Data ", webhookData);

    const data = webhookData.data;

    const paymentStatus = data.payment.payment_status;

    if (paymentStatus === "SUCCESS") {
      const orderId = data.order.order_id;

      await changePaymentStatusOfOrder(orderId, "SUCCESS");
      return Response.json({ message: "Order Successful" }, { status: 201 });
    } else throw new Error("Payment not successful! ");
  } catch (error: any) {
    console.log({ error });

    return Response.json({ message: error.message }, { status: 404 });
  }
};

export { handler as POST };

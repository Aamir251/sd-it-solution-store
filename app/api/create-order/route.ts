import { createOrderItem } from "@/sanity/lib/queries";
import { OrderDoc } from "@/sanity/lib/types";
import { CartItem } from "@/types/cart";
import { generateClientTxnId } from "@/utils/payment";
import { Cashfree } from "cashfree-pg";

const handler = async (req: Request) => {
  const clientId = process.env.NEXT_PUBLIC_CASHFREE_APPID as string;
  const appSecret = process.env.NEXT_PUBLIC_CASHFREE_SECRET as string;

  Cashfree.XClientId = clientId;
  Cashfree.XClientSecret = appSecret;
  Cashfree.XEnvironment =
    process.env.NODE_ENV === "development"
      ? Cashfree.Environment.SANDBOX
      : Cashfree.Environment.PRODUCTION;

  const body = await req.json();

  const { name, email, contact, cartItems, amount } = body as {
    name: string;
    email: string;
    contact: string;
    amount : number;
    cartItems: CartItem[];
  };

  const orderItems = cartItems.map((item) => ({
    productId: item._id,
    productName: item.name,
    quantity: item.qty,
    price: item.price,
  }));

  const orderNote = cartItems.map((item) => ` ${item.name} | ${item.qty},`);

  const order_id = generateClientTxnId();

  const orderDoc: OrderDoc = {
    _type: "orders",
    orderId: order_id,
    customerName: name,
    email,
    contact,
    items: orderItems,
    isPaid: "PENDING",
  };

  const request = {
    order_amount: amount,
    order_currency: "INR",
    order_id,
    customer_details: {
      customer_id: "sdituser",
      customer_phone: contact,
      customer_email: email,
      customer_name: name,
    },
    order_meta: {
      // return_url: 'https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}'
      return_url: `${process.env.NEXT_PUBLIC_CASHFREE_REDIRECT}?order_id=${order_id}`,
    },
    order_note: `${orderNote}`,
  };

  try {
    const response = await Cashfree.PGCreateOrder("2023-08-01", request);
    const data = response.data;

    const resp = await createOrderItem(orderDoc);

    return Response.json(data, { status: 201 });
  } catch (error: any) {
    console.log({ error: error.response.data.message });
    return Response.json(
      { message: error.response.data.message },
      { status: 404 }
    );
  }
};

export { handler as POST };

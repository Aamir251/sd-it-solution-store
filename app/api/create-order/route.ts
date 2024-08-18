import { CartItem } from "@/types/cart";
import { generateClientTxnId } from "@/utils/payment";

const handler = async (req: Request) => {
  const clientId = process.env.NEXT_PUBLIC_CASHFREE_APPID as string;
  const appSecret = process.env.NEXT_PUBLIC_CASHFREE_SECRET as string;

  const body = await req.json();

  const { name, email, contact, cartItems } = body as {
    name: string;
    email: string;
    contact: string;
    cartItems: CartItem[];
  };

  const cart_items = cartItems.map((item) => ({
    item_id: item._id,
    item_name: item.name,
    item_image_url: item.imageUrl,
    item_original_unit_price: item.price,
    item_quantity: item.qty,
  }));

  console.log("Cart_items ", cart_items);
  const order_id = generateClientTxnId();

  console.log({ order_id });

  const request = {
    order_amount: 10,
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
    cart_details: {
      cart_items,
    },
  };

  try {
    const response = await fetch("https://api.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-api-version": "2023-08-01",
        "x-client-id": clientId,
        "x-client-secret": appSecret,
      },
      body: JSON.stringify(request),
    });

    console.log({ response });
    const data = await response.json();

    console.log({ data });

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

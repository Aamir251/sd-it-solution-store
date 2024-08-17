import { CartItem } from "@/types/cart";
import { generateClientTxnId } from "@/utils/payment";
import { Cashfree } from "cashfree-pg";


// const handler = async (request: Request) => {

//   try {

//     const endpoint = `https://api.ekqr.in/api/create_order`


//     const client_txn_id = generateClientTxnId();

//     const body = await request.json()

//     const { name, email, contact } = body

//     console.log({ name, email, contact });



//     const resp = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         key: process.env.NEXT_PUBLIC_UPIGATEWAY_KEY,
//         client_txn_id: client_txn_id,
//         amount: '10',
//         "p_info": "null",
//         customer_name: name,
//         customer_email: email,
//         customer_mobile: contact,
//         // redirect_url: 'https://9ba7-45-126-162-183.ngrok-free.app/payment',
//         redirect_url: 'https://sditsolutionstore.com/payment',
//       }),
//     })

//     const data = await resp.json()


//     return Response.json(data, { status: 201 })
//   } catch (error: any) {

//     return Response.json({ message: error.message }, { status: 404 })
//   }
// }

// export {
//   handler as POST
// }


const handler = async (req: Request) => {


  const clientId = process.env.NEXT_PUBLIC_CASHFREE_APPID as string
  const appSecret = process.env.NEXT_PUBLIC_CASHFREE_SECRET as string


  Cashfree.XClientId = clientId;
  Cashfree.XClientSecret = appSecret;
  Cashfree.XEnvironment = process.env.NODE_ENV === "development" ? Cashfree.Environment.SANDBOX : Cashfree.Environment.PRODUCTION;


  const body = await req.json()

  const { name, email, contact, cartItems } = body as {
    name: string
    email: string
    contact: string
    cartItems: CartItem[]
  }


  const cart_items = cartItems.map((item) => (
    {
      item_id: item._id,
      item_name: item.name,
      item_image_url: item.imageUrl,
      item_original_unit_price: item.price,
      item_quantity: item.qty
    }
  ))
  const order_id = generateClientTxnId()

  const request = {
    order_amount: 10,
    order_currency: 'INR',
    order_id,
    customer_details: {
      customer_id: 'sdituser',
      customer_phone: contact,
      customer_email: email,
      customer_name: name
    },
    order_meta: {
      // return_url: 'https://www.cashfree.com/devstudio/preview/pg/web/checkout?order_id={order_id}'
      return_url: `${process.env.NEXT_PUBLIC_CASHFREE_REDIRECT}?order_id=${order_id}`
    },
    cart_details: {
      cart_items
    },
  }

  try {
    const response = await Cashfree.PGCreateOrder("2023-08-01", request)
    const data = response.data;

    return Response.json(data, { status: 201 })
  } catch (error: any) {
    console.log({ error: error.response.data.message });
    return Response.json({ message: error.response.data.message }, { status: 404 })
  }

}


export {
  handler as POST
}
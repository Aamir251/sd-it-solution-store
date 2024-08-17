import { generateClientTxnId } from "@/utils/payment";

const handler = async (request: Request) => {

  try {

    const endpoint = `https://api.ekqr.in/api/create_order`


    const client_txn_id = generateClientTxnId();

    const body = await request.json()

    const { name, email, contact } = body

    console.log({ name, email, contact });



    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: process.env.NEXT_PUBLIC_UPIGATEWAY_KEY,
        client_txn_id: client_txn_id,
        amount: '10',
        "p_info": "null",
        customer_name: name,
        customer_email: email,
        customer_mobile: contact,
        redirect_url: 'https://9ba7-45-126-162-183.ngrok-free.app/payment',
      }),
    })

    const data = await resp.json()


    return Response.json(data, { status: 201 })
  } catch (error: any) {

    return Response.json({ message: error.message }, { status: 404 })
  }
}

export {
  handler as POST
}
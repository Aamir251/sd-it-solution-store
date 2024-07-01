import { createOrderItem } from "@/sanity/lib/queries"
import { OrderDoc } from "@/sanity/lib/types"

export async function POST(req: Request) {
  try {
    const data = await req.json() 

    const resp = await createOrderItem(data as OrderDoc)
    console.log({ resp })
    Response.json("Document Created")
  } catch (error) {
    console.log({ error })
    return new Response("Error ", {
      status : 400
    })

  }

  return new Response('Success!', {
    status: 200,
  })
}
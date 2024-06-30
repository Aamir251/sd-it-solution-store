import { createOrderItem } from "@/sanity/lib/queries"

export async function POST(req: Request) {
  try {
    const data = await req.json() 

    const resp = await createOrderItem(data)
    console.log({ resp })
    Response.json("hehheheheh")
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
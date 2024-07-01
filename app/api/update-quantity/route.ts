import { changeProductQuantity } from "@/sanity/lib/queries"
import { OrderItem } from "@/sanity/lib/types"

export async function POST(req: Request) {
  try {
    const data = await req.json() as OrderItem[]

    console.log("Data received in API ", data)
    const changeProductPromises = data.map(({ productId, quantity }) => changeProductQuantity(productId, quantity))

    
    Promise.all(changeProductPromises).then(values => {
      console.log(values)
    })

    // const resp = await changeProductQuantity()
    // console.log({ resp })
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
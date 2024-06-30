
export async function POST(req: Request) {
  try {
    const { payload } = await req.json()
    console.log({ payment : payload.payment})
    console.log({ order : payload.order})
    Response.json("hehheheheh")
  } catch (error) {
    return new Response("Error ", {
      status : 400
    })

  }

  return new Response('Success!', {
    status: 200,
  })
}
const handler = async (request: Request) => {
  try {
    console.log({ request });

    const data = await request.json();

    console.log({ WEBHOOK: data });

    return Response.json({ message: "hello" }, { status: 201 });
  } catch (error: any) {
    console.log({ error });

    return Response.json({ message: error.message }, { status: 404 });
  }
};

export { handler as POST };

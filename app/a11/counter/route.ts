let counter = 0;
export async function GET() {
  return Response.json({ counter: counter });
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data)
  counter = data.newCounter;
  return new Response("New counter is " + counter, { status: 200 });
}

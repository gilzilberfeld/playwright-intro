let name= 'none';
export async function GET() {
  return Response.json({ theName: name });
}

export async function POST(req: Request) {
  const data = await req.json();
  console.log(data)
  name = data.newName;
  return new Response("Updated", { status: 200 });
}

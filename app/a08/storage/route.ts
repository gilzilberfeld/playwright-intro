import Chat from "../Chat";

let theChat = new Chat()

export async function POST(request: Request) {
  console.log("got in\n");
  const data = await request.json();
  console.log("got data:" + data.entry);
  if (data.entry === 'reset'){
    theChat = new Chat()
  }
  else{
    if (data.entry != "") {
      theChat.addLine(data.entry)
    }
  }
  return Response.json({ status: 200 });
}

export async function GET() {
  const theWholeLog = theChat.getAll() 
  return Response.json({theWholeLog},  { status: 200 });
}

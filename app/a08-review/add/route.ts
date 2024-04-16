import * as fs from "node:fs";

export async function POST(request: Request) {
  const data = await request.json();
  console.log("got data:" + data.entry);
  if (data.entry != "") {
    const newLine = data.entry + "\n";
    var oldEntry = ''
    var content = fs.readFileSync('./log.txt')
    if (content != undefined) {
      oldEntry = content.toString();
    } 

    const entry = oldEntry + newLine;
    fs.writeFileSync('./log.txt', entry);
  }

  return Response.json({ status: 200 });
}

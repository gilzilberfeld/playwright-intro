
function createData(name: string, app1: string, link1: string, app2: string, link2: string) {
  return { name, app1, link1, app2, link2 };
}

const rows = [
  createData("row1", "1. First test", "/a01", "2. Dynamic elements", "/a02"),
  createData("row2", "3. Navigation", "/a03", "4. Locators", "/a04"),
  createData("row3", "5. Checkboxes", "/a05", "6. Drop down list", "/a06"),
  createData("row4", "7. Navigation II", "/a07", "8. Chat", "/a08"),
  createData("row5", "9. Frames", "/a09", "10. Change-A-Frame", "/a10"),
  createData("row6", "11. API", "/a11", "12. API II", "/a12"),
];

export default function Home() {
  return (
    <main className="flex flex-col items-center p-5">
      <h1 className="p-2">The Apps Menu</h1>
      <div className="w-1/2">
        <table>
          <thead>
            <tr className="bg-teal-200">
              <th align="center">App name</th>
              <th align="center">Link</th>
              <th align="center">App name</th>
              <th align="center">Link</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td align="left" className="text-black bg-purple-100 w-1/4">
                  {row.app1}
                </td>
                <td align="center" className="text-blue-400 underline bg-purple-100">
                  <a href={row.link1}>{row.link1}</a>
                </td>
                <td align="left" className="text-black bg-purple-200 w-1/4">
                  {row.app2}
                </td>
                <td align="center" className="text-blue-400 underline bg-purple-200">
                  <a href={row.link2}>{row.link2}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="p-2">If you don&apos;t remember where you need to go, return here.</p>
    </main>
  );
}

/*
<div className="w-1/2">
  <table>
    <thead>
      <tr className="bg-teal-200">
        <th align="center">App name</th>
        <th align="center">Link</th>
        <th align="center">App name</th>
        <th align="center">Link</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.name}>
          <td align="left" className="bg-purple-100 w-1/4">{row.app1}</td>
          <td align="center" className="bg-purple-100">
            <a href={row.link1}>{row.link1}</a>
          </td>
          <td align="left" className="bg-purple-200 w-1/4">{row.app2}</td>
          <td align="center" className="bg-purple-200">
            <a href={row.link2}>{row.link2}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
*/

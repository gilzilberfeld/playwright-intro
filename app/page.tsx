import { Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
      <div className="w-1/2 ">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className="bg-teal-200">
                <TableCell align="center">App name</TableCell>
                <TableCell align="center">Link</TableCell>
                <TableCell align="center">App name</TableCell>
                <TableCell align="center">Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell align="left" className="bg-purple-100 w-1/4">
                    {row.app1}
                  </TableCell>
                  <TableCell align="center" className="bg-purple-100">
                    <Link href={row.link1}>{row.link1}</Link>
                  </TableCell>
                  <TableCell align="left" className="bg-purple-200 w-1/4">
                    {row.app2}
                  </TableCell>
                  <TableCell align="center" className="bg-purple-200">
                    <Link href={row.link2}>{row.link2}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </main>
  );
}

"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function App7() {
  const [theInput, setInput] = useState("");
  const router = useRouter()

  function handleReverse(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push('/a07/page2?input=' + theInput)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setInput(event.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 7 - Navigation: Page 1</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center m-4 px-4">
            <TextField className="w-1/3 p-2" label="Input" variant="outlined" onChange={handleInputChange}></TextField>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-1/2" variant="contained" onClick={handleReverse}>
              Go to page 2
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, clicking the buttons propagate the information from page to page.</p>
    </main>
  );
}

"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useRouter } from 'next/navigation'

export default function Demo3() {
  const [theInput, setInput] = useState("");
  const router = useRouter()

  function handleGo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push('/d03/reverse?input=' + theInput)
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setInput(event.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">Demo 3 - Navigation</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center m-4 px-4">
            <TextField className="w-1/3 p-2" label="Input" variant="outlined" onChange={handleInputChange}></TextField>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-1/2" variant="contained" onClick={handleGo}>
              Go to reverse page
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this demo, clicking the button causes navigation to another page.</p>
      <p className="m-3">The test checks the URL and text of the next page, check url.</p>
    </main>
  );
}

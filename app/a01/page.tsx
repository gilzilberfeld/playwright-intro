"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function App1() {
  const [isEnabled, setEnabled] = useState(false);
  const [theInput, setInput] = useState("");
  const [theResult, setResult] = useState("Waiting...")

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const inputLength = event.target.value.length;
    if (inputLength == 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
    setInput(event.target.value);
  }

    function handleReverse(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        const reverse = theInput.split("").reverse().join("")
        setResult(reverse)
    }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 1 - Simple Test</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between m-2 p-2">
            <TextField className="w-1/3" id="input" label="Input" placeholder="Input a string" variant="outlined" onChange={handleInputChange}></TextField>
            <TextField
              className="w-1/3"
              id="result"
              label="Result"
              defaultValue={theResult}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-1/3" disabled={isEnabled ? false : true} variant="contained" onClick={handleReverse}>
              Reverse!
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, clicking the button reverses the input string.</p>
      <p className="m-3">The test navigates to this page, fills the data in the input box (which enables the button), and validates the result.</p>
    </main>
  );
}

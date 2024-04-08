"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

let message: string;
export default function App4() {
  const [boxValue, setBoxValue] = useState("");

  function handleClear(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setBoxValue("");
  }

  function handleBox1Change(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setBoxValue(event.target.value);
  }

  function handleBox2Change(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setBoxValue(event.target.value);
  }
  function handleBox3Change(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setBoxValue(event.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 4 - Locators</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between m-4">
            <TextField className="w-1/4" label="Clone Box" placeholder='box1' variant="outlined" onChange={handleBox1Change} value={boxValue}></TextField>
            <TextField className="w-1/4" label="Clone Box" placeholder='box2' variant="outlined" onChange={handleBox2Change} value={boxValue}></TextField>
            <TextField className="w-1/4" label="Clone Box" placeholder='box3' variant="outlined" onChange={handleBox3Change} value={boxValue}></TextField>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-1/3" variant="contained" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, what you type gets cloned to the other boxes.</p>
      <p>Clicking the button clears the boxes.</p>
    </main>
  );
}

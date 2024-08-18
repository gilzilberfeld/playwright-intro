"use client";
import { Box, Button, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function App72() {
  const searchParams = useSearchParams();
  const firstPageText = searchParams.get("input");

  const [theInput, setInput] = useState("");
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    router.push("/a07/page3?input=" + firstPageText + theInput);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setInput(event.target.value);
  }

  function fromPage1(): import("react").ReactNode {
    return "From Page 1: " + firstPageText;
  }

  return (
    <Suspense>
      <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="p-2">App 7 - Navigation: Page 2</h1>
        <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
          <div className="flex flex-col">
            <label className="text-black">{fromPage1()}</label>
            <div className="flex flex-row justify-center m-4 px-4">
              <TextField className="w-1/3 p-2" label="Input" variant="outlined" onChange={handleInputChange}></TextField>
            </div>
            <div className="flex justify-center items-center">
              <Button className="w-1/2" variant="contained" onClick={handleClick}>
                Go to page 3
              </Button>
            </div>
          </div>
        </Box>
        <p className="m-3">In this app, clicking the buttons propagate the information from page to page.</p>
      </main>
    </Suspense>
  );
}

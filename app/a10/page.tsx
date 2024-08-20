"use client";

import { Box, Button } from "@mui/material";
import { useState } from "react";

export default function App10() {
  const [theSrc, setSrc] = useState("");

  function handleGoogle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://www.google.com/search?igu=1")
  }
  
  function handleTestingil(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://www.everydayunittesting.com/")
  }
  
  function handleWikipedia(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setSrc("https://wikipedia.com/")
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 10 - Change-A-Frame</h1>
      <p className="m-3">In this app, you can change the content of the iframe</p>
      <Box component="section" className="bg-purple-200 w-1/2" sx={{ p: 2, border: "2px white" }}>
        <div className="flex flex-row justify-between px-2">
          <Button className="px-2" variant="contained" onClick={handleGoogle}>Google</Button>
          <Button className="px-2" variant="contained"onClick={handleTestingil}>TestinGil</Button>
          <Button className="px-2"variant="contained" onClick={handleWikipedia}>Wikipedia</Button>
        </div>
      </Box>

      <iframe src={theSrc} width="400" height="600" title="The-Frame" />
    </main>
  );
}

"use client";

import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function App11() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const getCounter = async () => {
      const response = await fetch("/a11/counter");
      const theCounter = await response.json();
      setCounter(parseInt(theCounter.counter))
    };
    
    getCounter();
      }, []);

  function handleIncrement(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setCounter(counter + 1);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 11 - API Support</h1>
      <Box component="section" className="bg-purple-200 w-2/3" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between m-2 p-2">
            <Button className="w-1/3" variant="contained" onClick={handleIncrement}>
              Increment
            </Button>
            <label className="text-black py-2">{"Counter: " + counter}</label>
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </Box>
      <p className="m-3">In this app, clicking the Increment button, increments the counter.</p>
      <p className="m-3">The initial value is read from the server.</p>
    </main>
  );
}

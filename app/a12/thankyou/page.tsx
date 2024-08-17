"use client";

import { Box, Button, TextField } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function App12ThankYou() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  function getThankyouMessage() {
    return 'Thank you, ' + name + '!';
  }


  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 12 - API Exercise</h1>
      <Box component="section" className="bg-purple-200 w-2/3" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center m-2 p-2">
            <label className="text-black  w-full p-2">{getThankyouMessage()}</label>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, you can store a name. When submitting, it calls an API to store the name, and you will see a thank you page.</p>
    </main>
  );
}

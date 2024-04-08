"use client";
import { ChangeEvent, Suspense, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";

function Message() {
  let message: string;
  const searchParams = useSearchParams();
  const theInput = searchParams.get("input");
  if (theInput != null) {
    const theReverse = theInput.split("").reverse().join("");
    message = 'The reverse of "' + theInput + '" is "' + theReverse + '"';
  } else message = 'The reverse of "null" is "llun"';

  return <p className="text-blue-400 text-center m-2">{message}</p>;
}

export default function Demo3Reverse() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">Demo 3 - The Reverse</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <h1 className="text-blue-500  font-bold text-center m-2">Welcome to the Reverse page!</h1>
          <Suspense>
            <Message />
          </Suspense>
        </div>
      </Box>
      <p className="m-3">In this demo, clicking the button causes navigation to another page.</p>
      <p className="m-3">The test checks the URL and text of the next page, check url.</p>
    </main>
  );
}

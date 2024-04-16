"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function App1() {
  const [isEnabled, setEnabled] = useState(false);
  const [theInput, setInput] = useState("");
  const [theResult, setResult] = useState("Waiting...")

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 9 - Frames</h1>
      <p className="m-3">In this app, an iframe contains App1 (a01).</p>
      <iframe src="/a01"  width="400" height="600" title="This here frame" />
    </main>
  );
}

"use client";
import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function App8() {
  const [theInput, setInput] = useState("");
  const [theLog, setLog] = useState("Log");

  async function handleSend(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const data = JSON.stringify({ entry: theInput });
      await fetch("/a08/storage", { method: "POST", body: data });
      setInput("");
    } catch (error) {
      alert(error);
    }
  }

  function handleInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInput(event.target.value);
  }

  async function handleReset(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const data = JSON.stringify({ entry: "reset" });
      await fetch("/a08/storage", { method: "POST", body: data });
      setLog("");
    } catch (error) {
      alert(error);
    }
  }

  async function handleRefresh(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const theAPI = await fetch("/a08/storage");
      const theResponse = await theAPI.json();
      setLog(theResponse.theWholeLog);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 8 - Chat</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="justify-center m-2 p-2">
            <Box sx={{ border: "2px black" }}>
              <textarea value={theLog} name="log" readOnly rows={5} title="log" className="w-full text-black" />
            </Box>
          </div>
          <div className="flex flex-row justify-between m-2 p-2">
            <Button className="w-1/3" variant="contained" onClick={handleSend}>
              Send
            </Button>
            <TextField className="w-1/3" id="input" label="Input" value={theInput} placeholder="Input a string" variant="outlined" onChange={handleInput}></TextField>
          </div>
          <div className="flex flex-row justify-between m-2 p-2 items-center">
            <Button className="w-1/3" variant="contained" onClick={handleReset}>
              Reset
            </Button>
            <Button className="w-1/3" variant="contained" onClick={handleRefresh}>
              Refresh
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, the input is sent to server.</p>
      <p className="m-3">When refreshing the log shows the entire collected information</p>
    </main>
  );
}

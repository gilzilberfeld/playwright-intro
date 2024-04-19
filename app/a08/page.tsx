"use client";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const client = axios.create({
  baseURL: "http://localhost:3000/a08",
});

export default function App8() {
  const [theInput, setInput] = useState("");
  const [theLog, setLog] = useState("");

  async function handleSend(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const data = { entry: theInput };
      await client.post("/storage", data);
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
      const data = { entry: "reset" };
      await client.post("/storage", data);
      setLog('')
    } catch (error) {
      alert(error);
    }
  }

  async function handleRefresh(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
    try {
      const theAPI = await fetch("http://localhost:3000/a08/storage");
      const theResponse = await theAPI.json();
      setLog(theResponse.theWholeLog)
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
            <TextField
              className="w-full"
              id="result"
              label="Log"
              multiline
              value={theLog}
              variant="outlined"
              InputProps={{
                readOnly: true,
              }}
            ></TextField>
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

"use client";

import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

let message: string;
export default function App2() {
  const [errorVisible, setErrorVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleCheck(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    if (firstName.length == 0) {
      message = "First name is missing";
      setErrorVisible(true);
    }
    if (lastName.length == 0) {
      message = "Last name is missing";
      setErrorVisible(true);
    }
    if (firstName.length == 0 && lastName.length == 0) {
      message = "Both values are missing";
      setErrorVisible(true);
    }
  }

  function handleFirstNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setFirstName(event.target.value);
    setErrorVisible(false);
  }

  function handleLastNameChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setLastName(event.target.value);
    setErrorVisible(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 2 - Dynamic Element</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between m-4 px-4">
            <TextField className="w-1/3 p-2" label="First name" variant="outlined" onChange={handleFirstNameChange}></TextField>
            <TextField className="w-1/3 p-2" label="Last name" variant="outlined" onChange={handleLastNameChange}></TextField>
          </div>
          <div className="flex justify-center items-center">
            <Button className="w-1/3" variant="contained" onClick={handleCheck}>
              Check
            </Button>
          </div>
          <div className="text-red-500 font-bold text-center m-2">
            {errorVisible ? message : ""}</div>
        </div>
      </Box>
      <p className="m-3">In this app, clicking the button checks that both boxes are not empty.</p>
      <p className="m-3">The test navigates to this page, clicks on the button, checks that the error is displayed.</p>
      <p className="m-3"> The it types to clear the error and checks it disappeared</p>
    </main>
  );
}

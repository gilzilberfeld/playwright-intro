"use client";

import { Box, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function App12() {
  const router= useRouter()
  const [name,setName] = useState('')


  async function handleAdd(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    await fetch("/a12/storage",  {
      method: "POST", 
      body: JSON.stringify({ newName : name})
    })
    router.push('/a12/thankyou?name=' + name)
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setName(event.target.value)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 12 - API Exercise</h1>
      <Box component="section" className="bg-purple-200 w-2/3" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between m-2 p-2">
            <Button className="w-1/3" variant="contained" onClick={handleAdd}>
              Store Name
            </Button>
            <TextField className="w-1/3 p-2" label="Name" variant="outlined" onChange={handleNameChange}>{name}</TextField>
            
          </div>
          <div className="flex justify-center items-center"></div>
        </div>
      </Box>
      <p className="m-3">In this app, you can store a name. When submitting, it calls an API to store the name, and you will see a thank you page.</p>
    </main>
  );
}

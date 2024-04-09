"use client";

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Menu, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

let message: string;
export default function App6() {

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 6 - Drop Down List</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center m-4">
            <Select className="w-1/2" value="1" label="Item List">
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
              <MenuItem value={5}>Item 5</MenuItem>
            </Select>
          </div>
          <div className="flex flex-row justify-between">
            <Button className="w-1/3" variant="contained" >
              Select
            </Button>
            <TextField className="w-1/3" label="Select Item" value="" />
          </div>
          <div className="flex flex-row justify-center m-2">
            <label className="text-black">Selected: {"s"}</label>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, you can select items from the drop-down or by entering the value in the text box and clicking the button.
      The selected item is displayed below.</p>
    </main>
  );
}

"use client";

import { Box, Button, Checkbox, FormControlLabel, FormGroup, Menu, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { ReactNode, useState } from "react";

let message: string;
export default function App6() {
  type SelectValue = '' | '1' | undefined;
  
  const [selectedItem, setSelectItem] = useState<SelectValue>('1');
  const [isDisabled, setDisabled] = useState(true);
  const [theInput, setTheInput] = useState('')
  const [theResult, setTheResult] = useState('1')


  function handleSelect(event: SelectChangeEvent<"1">, child: ReactNode): void {
    setSelectItem(event.target.value as SelectValue);
    setTheResult(event.target.value)
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setTheInput(event.target.value)

    const shouldDisable = event.target.value.length == 0
    setDisabled(shouldDisable);
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const theNumber = parseInt(theInput)
    if (Number.isNaN(theNumber)) {
      setTheResult ('Not Found')  
      return
    }
    if (theNumber < 1 || theNumber > 5){
      setTheResult ('Not Found')  
      return
    }
    setSelectItem(theInput as SelectValue)
    setTheResult(theInput)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 6 - Drop Down List</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-center m-4">
            <Select className="w-1/2" value={selectedItem} label="Item List" 
                onChange={handleSelect}>
              <MenuItem value={1}>Item 1</MenuItem>
              <MenuItem value={2}>Item 2</MenuItem>
              <MenuItem value={3}>Item 3</MenuItem>
              <MenuItem value={4}>Item 4</MenuItem>
              <MenuItem value={5}>Item 5</MenuItem>
            </Select>
          </div>
          <div className="flex flex-row justify-between">
            <TextField className="w-1/2" label="Select Item" value={theInput} onChange={handleTextChange} />
            <Button className="w-1/4" variant="contained" disabled={isDisabled} onClick={handleClick}>
              Select
            </Button>
          </div>
          <div className="flex flex-row justify-center m-2">
            <label className="text-black">Selected: Item {theResult}</label>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, you can select items from the drop-down or by entering the value in the text box and clicking the button. The selected item is displayed below.</p>
    </main>
  );
}

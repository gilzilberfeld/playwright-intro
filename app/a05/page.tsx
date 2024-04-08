"use client";

import { Box, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

let message: string;
export default function App5() {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [clearBothDisabled, setClearBothDisabled] = useState(true);
  const [selectBothDisabled, setSelectBothDisabled] = useState(false);

  function handleSelectBoth(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setFirstChecked(true);
    setSecondChecked(true);
    setSelectBothDisabled(true);
    setClearBothDisabled(false);
  }

  function handleClearBoth(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    setFirstChecked(false);
    setSecondChecked(false);
    setSelectBothDisabled(false);
    setClearBothDisabled(true);
  }

  function handleFirst(event: React.SyntheticEvent<Element, Event>, checked: boolean): void {
    setFirstChecked(checked);
    setStateForButtons(checked, secondChecked);
  }

  function handleSecond(event: React.SyntheticEvent<Element, Event>, checked: boolean): void {
    setSecondChecked(checked);
    setStateForButtons(checked, firstChecked);
  }

  function setStateForButtons(myCheckState: boolean, other: boolean) {
    if (!other && myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(false);
    }
    if (!other && !myCheckState) {
      setClearBothDisabled(true);
      setSelectBothDisabled(false);
    }
    if (other && !myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(false);
    }
    if (other && myCheckState) {
      setClearBothDisabled(false);
      setSelectBothDisabled(true);
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="p-2">App 5 - Checkboxes</h1>
      <Box component="section" className="bg-purple-200" sx={{ p: 2, border: "2px black" }}>
        <div className="flex flex-col">
          <FormGroup>
            <div className="w-full flex flex-row justify-between m-4 px-14">
              <FormControlLabel className="text-black" control={<Checkbox checked={firstChecked} />} onChange={handleFirst} label="Check 1" />
              <FormControlLabel className="text-black" control={<Checkbox checked={secondChecked} />} onChange={handleSecond} label="Check 2" />
            </div>
          </FormGroup>
          <div className="flex justify-between items-center">
            <Button className="w-1/3" variant="contained" disabled={selectBothDisabled} onClick={handleSelectBoth}>
              Select Both
            </Button>
            <Button className="w-1/3" variant="contained" disabled={clearBothDisabled} onClick={handleClearBoth}>
              Clear Both
            </Button>
          </div>
        </div>
      </Box>
      <p className="m-3">In this app, you can select either checkbox, or use the buttons to check or clear both. The state of the checkboxes affects the state of the buttons.</p>
    </main>
  );
}

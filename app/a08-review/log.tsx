

import { TextField } from "@mui/material";
import { promises as fs } from "fs";

let theLog: string = "";

export interface LogProps {}

export default function Log(logprops: LogProps) {

  const theLog = fs.readFile('./log.txt', 'utf-8').then( buf => buf.toString())


  return (
    <TextField
      className="w-full"
      id="result"
      label="Log"
      value={theLog}
      variant="outlined"
      InputProps={{
        readOnly: true,
      }}
    ></TextField>
  );
}

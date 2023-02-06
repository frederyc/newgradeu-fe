import React from "react";
import {TextField} from "@mui/material";
import {authTextFieldSX} from "../styling/AuthTextFieldSX";

type AuthTextFieldParams = {
  id?: string,
  label: string,
  type: string,
  errorMessage: string | null,   // This should be null or empty. If not, the text field will enter 'error mode'
  setText: React.Dispatch<React.SetStateAction<string>>,
}

const AuthTextField = (params: AuthTextFieldParams) => {
  return (
      <TextField
          id={params.id}
          label={params.label}
          variant={"outlined"}
          required
          fullWidth
          error={params.errorMessage != null && params.errorMessage !== ""}
          helperText={params.errorMessage}
          size={"small"}
          type={params.type}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => params.setText(e.target.value)}
          sx={authTextFieldSX}
      />
  );
}

export default AuthTextField;

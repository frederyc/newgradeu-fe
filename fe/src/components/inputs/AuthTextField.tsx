import React from "react";
import {TextField} from "@mui/material";

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
          sx={{
            "& .MuiInputLabel-root": {
              color: '#8083FF',
              "@media (max-width: 728px)": {
                fontSize: "0.85em"
              },
            },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: "#8083FF",
                borderWidth: "2px"
              },
            },
            "& .MuiFormHelperText-root": {
              color: "D32F2F"
            }
          }}
      />
  );
}

export default AuthTextField;

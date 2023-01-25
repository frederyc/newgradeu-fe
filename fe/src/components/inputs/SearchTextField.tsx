import react from "react";
import {FormControl, InputAdornment, OutlinedInput, Palette, useTheme} from "@mui/material";
import ChromaticsService from "../../services/ChromaticsService";
import React from "react";

type SearchTextFieldParams = {
  id?: string,
  icon: react.ReactNode,
  placeHolder: string,
  inputType: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
}

const SearchTextField = (params: SearchTextFieldParams) => {
  const palette: Palette = useTheme().palette;

  return (
      <FormControl id={"search-text-field"} fullWidth size={"small"} sx={{
        "& .MuiOutlinedInput-root": {
          height: "100%",
          "@media (max-width: 728px)": {
            height: "32px"
          },
          backgroundColor: palette.background.default,
          color: palette.text.secondary,
          "& fieldset": {
            border: `2px solid ${palette.background.default}`
          },
          "&:hover fieldset": {
            borderColor: ChromaticsService.adjustColorLightness(palette.background.default, 15),
          },
          "&.Mui-focused fieldset": {
            borderColor: ChromaticsService.adjustColorLightness(palette.background.default, 15),
          },
        },
      }}>
        <OutlinedInput
          id="outlined-adornment-amount" placeholder={params.placeHolder} type={params.inputType}
          startAdornment={
            <InputAdornment position="start" sx={{
              color: palette.text.secondary
            }}>{params.icon}</InputAdornment>
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => params.setText(e.target.value)}
        />
      </FormControl>
  );
};

export default SearchTextField;

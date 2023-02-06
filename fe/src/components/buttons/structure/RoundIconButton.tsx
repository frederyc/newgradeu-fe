import react from "react";
import ChromaticsService from "../../../services/ChromaticsService";
import {IconButton, Palette, useTheme} from "@mui/material";
import {roundIconButtonSX} from "../styling/RoundIconButtonSX";

type RoundIconButton = {
  id?: string,
  icon: react.ReactNode,
  onClick: (...args: any[]) => any,
  /**
   * primary - will make the button have the purple background and a white-ish icon
   * theme - will make the button have a background and icon color that complies with the active theme
   */
  variant: "primary" | "theme"
}

const RoundIconButton = (params: RoundIconButton) => {
  const palette: Palette = useTheme().palette;

  return (
      <IconButton children={params.icon} onClick={()=>params.onClick()} sx={roundIconButtonSX(palette, params.variant)}/>
  )
}

export default RoundIconButton;

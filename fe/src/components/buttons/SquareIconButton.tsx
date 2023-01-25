import react from "react";
import {IconButton, Palette, useTheme} from "@mui/material";
import ChromaticsService from "../../services/ChromaticsService";

type SquareIconButtonParams = {
  id?: string,
  icon: react.ReactNode,
  onClick: (...args: any[]) => any,
  /**
   * primary - will make the button have the purple background and a white-ish icon
   * theme - will make the button have a background and icon color that complies with the active theme
   */
  variant: "primary" | "theme"
}

const SquareIconButton = (params: SquareIconButtonParams) => {
  const palette: Palette = useTheme().palette;

  return (
    <IconButton children={params.icon} onClick={() => params.onClick()} sx={{
      backgroundColor: params.variant === "primary" ? palette.primary.main : palette.background.default,
      borderRadius: "4px",
      color: params.variant === "primary" ? palette.secondary.main : palette.text.secondary,
      "&:hover": {
        backgroundColor: ChromaticsService.adjustColorLightness(
            params.variant === "primary" ? palette.primary.main : palette.background.default,
            15
        )
      },
      "@media (max-width: 728px)": {
        width: "32px",
        height: "32px"
      },
    }}/>
  );
};

export default SquareIconButton;

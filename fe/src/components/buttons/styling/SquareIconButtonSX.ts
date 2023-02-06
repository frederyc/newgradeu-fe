import {Palette} from "@mui/material";
import ChromaticsService from "../../../services/ChromaticsService";

export const squareIconButtonSX = (palette: Palette, variant: string) => {
  return {
    backgroundColor: variant === "primary" ? palette.primary.main : palette.background.default,
    borderRadius: "4px",
    color: variant === "primary" ? palette.secondary.main : palette.text.secondary,
    "&:hover": {
      backgroundColor: ChromaticsService.adjustColorLightness(
          variant === "primary" ? palette.primary.main : palette.background.default,
          15
      )
    },
    "@media (max-width: 1000px)": {
      width: "32px",
      height: "32px"
    },
  }
}

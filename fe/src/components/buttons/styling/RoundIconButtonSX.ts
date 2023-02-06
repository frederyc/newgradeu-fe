import ChromaticsService from "../../../services/ChromaticsService";
import {Palette} from "@mui/material";

export const roundIconButtonSX = (palette: Palette, variant: string) => {
  return {
    backgroundColor: variant === "primary" ? palette.primary.main : palette.background.default,
    opacity: "0.4",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    color: variant === "primary" ? palette.secondary.main : palette.text.secondary,
    "&:hover": {
      backgroundColor: ChromaticsService.adjustColorLightness(
          variant === "primary" ? palette.primary.main : palette.background.default,
          15
      )
    },
  }
}

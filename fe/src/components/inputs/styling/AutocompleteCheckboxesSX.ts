import {Palette} from "@mui/material";

export const autocompleteCheckboxesSX = (palette: Palette) => {
  return {
    backgroundColor: palette.background.default,
    borderRadius: "3px",
    svg: {
      color: palette.text.secondary
    },
    ".MuiChip-root": {
      backgroundColor: palette.primary.main
    },
  }
}

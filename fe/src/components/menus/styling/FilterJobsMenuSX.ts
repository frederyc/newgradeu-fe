import {Palette} from "@mui/material";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";

export const filterJobsMenuSX = (palette: Palette, wd: WindowDimensions) => {
  return {
    ".MuiPaper-root": {
      width: `${wd.width <= 1000 ? 100 : 400}${wd.width <= 1000 ? "vw" : "px"}`,
      maxHeight: `${wd.width <= 1000 ? 80 : 100}vh`,
      backgroundColor: palette.background.paper,
      padding: "20px"
    },
  }
}

export const innerBoxSX = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px"
}

export const menuTitleSX = (palette: Palette) => {
  return {
    color: palette.primary.main,
    fontSize: "2em",
  }
}

export const filterCategoryTitleSX = {
  fontSize: "1.2em",
}

export const filterCategorySX = {
  display: "flex",
  flexDirection: "column",
}

export const categoriesWrapperSX = {
  display: "flex",
  flexDirection: "column",
  gap: "16px"
}

export const filterOptionsWrapperSX = (palette: Palette) => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    ".MuiCheckbox-root": {
      padding: "0px 0px 0px 8px",
      color: palette.text.secondary,
    },
    ".MuiFormControlLabel-label": {
      color: palette.text.secondary
    }
  }
}

import {Palette} from "@mui/material";

export const baseSearchBarSX = (palette: Palette) => {
  return {
    width: "100vw",
    height: "56px",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    padding: "8px 24px 8px 24px",
    backgroundColor: palette.background.paper,
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    "@media (max-width: 1000px)": {
      height: "88px",
      padding: "6px 12px 6px 12px"
    },
  }
}

export const logoWrapperSX = {
  height: "100%",
  width: "256px",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  "@media (max-width: 1000px)": {
    display: "none"
  }
}

export const logoImgSX = {
  width: "24px",
  borderRadius: "5px"
}

export const logoNameSX = (palette: Palette) => {
  return {
    height: "fit-content",
    width: "fit-content",
    fontWeight: "bold",
    fontSize: "0.85em",
    color: palette.primary.main
  }
}

export const contentWrapperSX = {
  width: "100%",
  height: "100%",
  padding: "0px 48px 0px 48px",
  "@media (max-width: 1000px)": {
    padding: "0"
  },
}

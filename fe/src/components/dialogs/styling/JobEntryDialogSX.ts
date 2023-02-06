import ChromaticsService from "../../../services/ChromaticsService";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";

export const jobEntryDialogSX = {
  ".MuiDialogContent-root": {
    padding: "0px",
  },
}

export const jobEntryDialogContentSX = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  overflowY: "initial",
  "@media (max-width: 1000px)": {
    width: "100%"
  },
}

export const logoOptionsSX = (logoRef: HTMLImageElement | null) => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "128px",
    backgroundColor: ChromaticsService.getTopLeftPixelColor(logoRef) ?? ""
  }
}

export const companyLogoSX =  {
  width: "92px",
  height: "92px",
}

export const cancelIconSX = {
  position: "absolute",
  top: "0px",
  right: "0px"
}

export const mainContentSX = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "16px",
  padding: "0px 20px 20px 20px"
}

export const titleSX = {
  width: "100%",
  textAlign: "center",
  fontSize: "1.8em",
}

export const companyNameSX = {
  width: "100%",
  textAlign: "center",
  fontSize: "1.2em",
}

export const wrapperMoreJobDetailsSX = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "center",
  gap: "8px",
  marginTop: "4px",
}

export const moreDetailsSX = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  ".MuiTypography-h4": {
    fontSize: "1.2em",
  },
  ".MuiTypography-body1": {
    fontSize: "0.85em",
  }
}

export const skillsWrapperSX = (wd: WindowDimensions) => {
  return {
    display: "flex",
    flexDirection: wd.width <= 1000 ? "column" : "row",
    gap: "8px",
    width: "100%",
  }
}

export const tagsWrapperSX = {
  display: "flex",
  flexDirection: "row",
  marginTop: "2px",
  flexWrap: "wrap",
  gap: "6px"
}

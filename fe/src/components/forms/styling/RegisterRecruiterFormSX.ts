export const registerRecruiterFormSX = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  gap: "12px",
  minHeight: "310px"
}

export const promotionMessageSX = {
  color: "#ACB7C0",
  fontSize: "0.95em",
  "@media (max-width: 1000px)": {
    fontSize: "0.75em"
  },
}

export const userTextInputWrapperSX = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  "@media (max-width: 1000px)": {
    gap: "10px"
  },
}

export const companyAutocompleteSX = {
  "& .MuiInputLabel-root": {
    color: '#8083FF',
    "@media (max-width: 1000px)": {
      fontSize: "0.85em"
    },
  },
  "& .MuiOutlinedInput-root": {
    "& > fieldset": {
      borderColor: "#8083FF",
      borderWidth: "2px"
    },
  },
  "& .MuiAutocomplete-clearIndicator": {
    color: "#8083FF"
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: "#8083FF"
  }
}

export const passwordWrapperSX = {
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  "@media (max-width: 1000px)": {
    gap: "6px"
  },
}

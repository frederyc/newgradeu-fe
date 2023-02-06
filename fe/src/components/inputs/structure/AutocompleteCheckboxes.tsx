import react, {SyntheticEvent, useState} from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams, Checkbox,
  Palette, Paper,
  TextField, useTheme
} from "@mui/material";
import {autocompleteCheckboxesSX} from "../styling/AutocompleteCheckboxesSX";

type AutocompleteCheckboxesParams = {
  name: string,
  options: string[],
  selectedOptions: string[],
  setSelectedOptions: react.Dispatch<react.SetStateAction<string[]>>
}

/**
 * name: the name of the autocomplete box
 * options: the available options the user can choose from
 * selectedOptions: the currently selected options, coming from other component, stateful variable
 * setSelectedOptions: the setter for the above
 */
const AutocompleteCheckboxes = (params: AutocompleteCheckboxesParams) => {
  const palette: Palette = useTheme().palette;

  const handleChange = (e: SyntheticEvent, nv: string[]) => {
    e.stopPropagation();
    params.setSelectedOptions(nv);
  }

  // I spent 2.5h trying to find out how to change the background color of the dropdown menu, DON'T TOUCH IT!
  return (
      <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={params.options}
          sx={autocompleteCheckboxesSX(palette)}
          disableCloseOnSelect
          PaperComponent={({ children }) => (
              <Paper style={{ backgroundColor: palette.background.default }}>{children}</Paper>
          )}
          getOptionLabel={(option) => option}
          onChange={(e: SyntheticEvent, nv: string[]) => handleChange(e, nv)}
          renderOption={(props, option) => (
              <li {...props}>
                <Checkbox
                    style={{ marginRight: 8 }}
                    checked={params.selectedOptions.includes(option)}
                />
                {option}
              </li>
          )}
          renderInput={(prs: AutocompleteRenderInputParams) => (
              <TextField {...prs} label={params.name} size={"small"} />
          )}
      />
  );
}

export default AutocompleteCheckboxes;

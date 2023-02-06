import react from "react";
import {Box, Palette, Typography, useTheme} from "@mui/material";
import logo from "../../../resources/images/newgradeu_logo.jpg";
import React from "react";
import {baseSearchBarSX, contentWrapperSX, logoImgSX, logoNameSX, logoWrapperSX} from "../styling/BaseSearchBarSX";

type BaseSearchBarParams = {
  content: react.ReactNode
}

/**
 * This is a component that is not meant to be used on its own. It acts as a base bar that occupies all the width of
 * the viewport. It's always sticking to the top of the screen and displays its content. The content should have the
 * width and height set to 100%. The components in content should be aligned in the center. Content should also handle
 * media queries for mobile devices.
 * @param params - A 'content' which represents the child element this component will render
 */
const BaseSearchBar = (params: BaseSearchBarParams) => {
  const palette: Palette = useTheme().palette;

  return (
      <Box id={'base-search-bar'} sx={baseSearchBarSX(palette)}>
        <Box id={"logo-wrapper"} sx={logoWrapperSX}>
          <img src={logo} alt={"Cannot load image"} style={logoImgSX} />
          <Typography variant={"h5"} sx={logoNameSX(palette)} >
            New Grad EU
          </Typography>
        </Box>
        <Box id={"content-wrapper"} sx={contentWrapperSX}>
          {params.content}
        </Box>
      </Box>
  );
}

export default BaseSearchBar;

import react from "react";
import {Box, Palette, Typography, useTheme} from "@mui/material";
import logo from "../../resources/images/newgradeu_logo.jpg";
import React from "react";

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
      <Box id={'base-search-bar'} sx={{
        width: "100vw",
        height: "56px",
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        padding: "8px 24px 8px 24px",
        backgroundColor: palette.background.paper,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        "@media (max-width: 728px)": {
          height: "88px",
          padding: "6px 12px 6px 12px"
        },
      }}>
        <Box id={"logo-wrapper"} sx={{
          height: "100%",
          width: "256px",
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          "@media (max-width: 728px)": {
            display: "none"
          }
        }}>
          <img src={logo} alt={"Cannot load image"} style={{
            width: "24px",
            borderRadius: "5px"
          }} />
          <Typography variant={"h5"} sx={{
            height: "fit-content",
            width: "fit-content",
            fontWeight: "bold",
            fontSize: "0.85em"
          }} >
            New Grad EU
          </Typography>
        </Box>
        <Box id={"content-wrapper"} sx={{
          width: "100%",
          height: "100%",
          padding: "0px 48px 0px 48px",
          "@media (max-width: 728px)": {
            padding: "0"
          },
        }}>
          {params.content}
        </Box>
      </Box>
  );
}

export default BaseSearchBar;

import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import WindowDimensions from "../../types/interfaces/WindowDimensions";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AuthenticationCard from "../cards/AuthenticationCard";
// @ts-ignore
import background from "../../resources/images/background_companies.jpg";

const BACKGROUND_WIDTH: number = 4972;
const BACKGROUND_HEIGHT: number = 4486;

const AuthenticationPage = () => {
  const windowDimensions: WindowDimensions = useWindowDimensions();

  const getBackgroundScale = (): number => {
      const isMobile: boolean = windowDimensions.width < windowDimensions.height;
      return Math.max(windowDimensions.width, windowDimensions.height) / 4500 + (isMobile ? 0.05 : 0);
  }

  // @ts-ignore
  return (
    <Box id={"authentication-page"} sx={{
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "2vw",
    }}>
      <Box id={"background-wrapper"} sx={{
        position: "fixed",
        zIndex: "-1",
        width: `${BACKGROUND_WIDTH * getBackgroundScale()}px`,
        left: `${(windowDimensions.width - BACKGROUND_WIDTH * getBackgroundScale()) / 2}px`
      }}>
        <img src={background} alt={"Cannot load image"} style={{
          width: "100%",
          height: "100%"
        }} />
      </Box>
      <Box id={"authentication-form-wrapper"} sx={{
        width: "650px",
        "@media (max-width: 1200px)": {
          width: "90vw"
        },
      }}>
        <AuthenticationCard />
      </Box>
    </Box>
  );
}

export default AuthenticationPage;

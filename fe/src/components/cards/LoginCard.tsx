import React from "react";
import {Box, Button, Typography} from "@mui/material";
// @ts-ignore
import logo from '../../resources/images/newgradeu_logo.jpg';
import LoginForm from "../forms/LoginForm";

type LoginCardParams = {
  switchToRegister: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginCard = (params: LoginCardParams) => {
  return (
      <Box id={"login-card"} sx={{
        backgroundColor: "white",
        borderRadius: "10px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        gap: "20px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}>
        <Box id={"logo-wrapper"} sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center"
        }}>
          <img src={logo} alt={"Cannot load iamge"} style={{
            width: "32px",
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
        <Typography variant={"h4"} sx={{
          height: "fit-content",
          margin: "0%",
          padding: "0%",
          fontSize: "1.2em",
          fontWeight: "bold"
        }}>
          Login
        </Typography>
        <LoginForm />
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "top",
        }}>
          <Typography variant={"subtitle1"} sx={{
            color: "#ACB7C0"
          }}>
            Are you new to this platform?
          </Typography>
          <Button variant={"text"} size={"small"} onClick={() => params.switchToRegister(true)} sx={{
            fontWeight: "bold",
          }}>
            Register
          </Button>
        </Box>
      </Box>
  );
}

export default LoginCard;

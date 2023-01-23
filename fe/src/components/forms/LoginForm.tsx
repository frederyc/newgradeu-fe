import React, {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import AuthTextField from "../inputs/AuthTextField";
import google from "../../resources/images/google.png";
import facebook from "../../resources/images/facebook.png";

/**
 * This is the form used for the login screen part of the card. It contains the following items:
 * Default message (Best place to start your career. Best place to find talent.);
 * Email Field;
 * Password Field;
 * Login Button;
 * Default message (-or continue with-);
 * Alternative authentication methods (Facebook, Google);
 */
const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // TODO: add functionality when you have server
  }

  return (
      <Box id={"form-wrapper"} sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "top",
        gap: "12px"
      }}>
        <Typography variant={"subtitle1"} sx={{
          color: "#ACB7C0",
          fontSize: "0.95em",
          "@media (max-width: 728px)": {
            fontSize: "0.75em"
          },
        }}>
          Best place to start your career. Best place to find talent.
        </Typography>
        <Box id={"user-text-input-wrapper"} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          "@media (max-width: 728px)": {
            gap: "10px"
          }
        }}>
          <AuthTextField id={"email"} label={"Email"} type={"email"} errorMessage={null} setText={setEmail} />
          <AuthTextField id={"password"} label={"Password"} type={"password"} errorMessage={null} setText={setPassword} />
        </Box>
        <Box id={"user-button-input-wrapper"} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          "@media (max-width: 728px)": {
            gap: "8px"
          }
        }}>
          <Button onClick={() => handleLogin()} id={"login"} variant={"contained"} size={"small"} sx={{
            textTransform: "none"
          }}>
            Login
          </Button>
          <Typography variant={"subtitle1"} sx={{
            color: "#ACB7C0",
            textAlign: "center"
          }}>
            - or continue with -
          </Typography>
          <Box id={"alternative-auth-wrapper"} sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            justifyContent: "center",
          }}>
            <Button id={"google-auth"} sx={{
              width: "0px",
              height: "32px",
              backgroundColor: "#8083FF",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              transition: "background 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#595BB2",
              }
            }}>
              <img src={google} alt={"Cannot load image"} style={{
                width: "16px",
                height: "16px",
                padding: "0",
                margin: "0"
              }}/>
            </Button>
            <Button id={"facebook-auth"} sx={{
              width: "0px",
              height: "32px",
              backgroundColor: "#8083FF",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              transition: "background 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: "#595BB2",
              }
            }}>
              <img src={facebook} alt={"Cannot load image"} style={{
                width: "16px",
                height: "16px",
                padding: "0",
                margin: "0"
              }}/>
            </Button>
          </Box>
        </Box>
      </Box>
  );
}

export default LoginForm;

import React, {useState} from "react";
import {Box} from "@mui/material";
import ReactCardFlip from "react-card-flip";
import LoginForm from "../forms/LoginForm";
import RegisterCard from "./RegisterCard";
import LoginCard from "./LoginCard";
const AuthenticationCard = () => {
  const [isFlipped, setIsFlipper] = useState<boolean>(false);

  return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"} children={[
        <LoginCard switchToRegister={setIsFlipper} />,
        <RegisterCard switchFromLogin={setIsFlipper} />
      ]}></ReactCardFlip>
  );
}

export default AuthenticationCard;

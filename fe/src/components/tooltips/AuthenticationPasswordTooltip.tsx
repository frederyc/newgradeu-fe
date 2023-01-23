import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {Tooltip} from "@mui/material";

const RequirementsList = () => {
  return (
    <div>
      Password requirements
      <ul style={{
        margin: "0%",
        padding: "0%",
        listStyle: "none",
      }}>
        <li>• Between 8 and 25 characters</li>
        <li>• At least 1 uppercase letter</li>
        <li>• At least 1 lowercase letter</li>
        <li>• At least 1 number</li>
        <li>• At least 1 special character</li>
      </ul>
    </div>
  );
}

const AuthenticationPasswordTooltip = () => {
  return (
    <Tooltip title={<RequirementsList />} placement={"top"}>
      <InfoIcon sx={{
        marginTop: "8px",
        "&:hover": {
          cursor: "pointer",
          filter: "brightness(1.2)"
        }
      }} />
    </Tooltip>
  );
}

export default AuthenticationPasswordTooltip;

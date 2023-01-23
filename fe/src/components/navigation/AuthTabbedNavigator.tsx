import React from "react";
import {Box, Typography} from "@mui/material";

export enum TAB_FORM {
  JOB_SEEKER,
  RECRUITER
}

type AuthTabbedNavigatorParams = {
  tab: TAB_FORM,
  setTab: React.Dispatch<React.SetStateAction<TAB_FORM>>
}

const AuthTabbedNavigator = (params: AuthTabbedNavigatorParams) => {
  const [tab, setTab] = [params.tab, params.setTab];

  return <Box id={"tabbed-navigator"} sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column"
  }}>
    <Box id={"tabs"} sx={{
      display: "flex",
      flexDirection: "row",
      width: "100%",
    }}>
      <Box id={"tab-job-seeker"} onClick={() => setTab(TAB_FORM.JOB_SEEKER)} sx={{
        width: "50%",
        height: "35px",
        borderRadius: "5px 0px 0px 5px",
        borderWidth: "2px",
        borderColor: "#8083FF",
        borderStyle: "solid",
        backgroundColor: tab == TAB_FORM.JOB_SEEKER ? "#8083FF" : "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Typography variant={"h6"} sx={{
          width: "100%",
          textAlign: "center",
          fontSize: "1.15em",
          "@media (max-width: 728px)": {
            fontSize: "0.85em"
          },
          color: tab == TAB_FORM.JOB_SEEKER ? "#F5F5F5" : "#8083FF"
        }}>
          Job Seeker
        </Typography>
      </Box>
      <Box id={"tab-recruiter"} onClick={() => setTab(TAB_FORM.RECRUITER)} sx={{
        width: "50%",
        height: "35px",
        borderRadius: "0px 5px 5px 0px",
        borderWidth: "2px",
        borderColor: "#8083FF",
        borderStyle: "solid",
        backgroundColor: tab == TAB_FORM.RECRUITER ? "#8083FF" : "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Typography variant={"h6"} sx={{
          width: "100%",
          textAlign: "center",
          fontSize: "1.15em",
          "@media (max-width: 728px)": {
            fontSize: "0.85em"
          },
          color: tab == TAB_FORM.RECRUITER ? "#F5F5F5" : "#8083FF"
        }}>
          Recruiter
        </Typography>
      </Box>

    </Box>
  </Box>;
}

export default AuthTabbedNavigator;

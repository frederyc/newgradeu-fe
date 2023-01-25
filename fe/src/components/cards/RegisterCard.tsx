import React, {useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import logo from "../../resources/images/newgradeu_logo.jpg";
import AuthTabbedNavigator, {TAB_FORM} from "../navigation/AuthTabbedNavigator";
import RegisterJobSeekerForm from "../forms/RegisterJobSeekerForm";
import RegisterRecruiterForm from "../forms/RegisterRecruiterForm";

type RegisterFormSelectParams = {
  switchFromLogin: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * This is a selector component used on the register screen. It contains the logo, the tabbed navigator, the register
 * form for either Job Seeker or recruiter and a button to go back to the Login Page.
 * Due to the current background on the register screen, we had to create a separate component for this.
 */
const RegisterCard = (params: RegisterFormSelectParams) => {
  const [tab, setTab] = useState<TAB_FORM>(TAB_FORM.JOB_SEEKER);
  return (
    <Box id={"register-job-seeker-form"} sx={{
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
        Register
      </Typography>
      <AuthTabbedNavigator tab={tab} setTab={setTab}/>
      {
        tab === TAB_FORM.JOB_SEEKER ? <RegisterJobSeekerForm /> : <RegisterRecruiterForm />
      }
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "top",
      }}>
        <Typography variant={"subtitle1"} sx={{
          color: "#ACB7C0"
        }}>
          Already have an account?
        </Typography>
        <Button onClick={() => params.switchFromLogin(false)} variant={"text"} size={"small"} sx={{
          fontWeight: "bold",
        }}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default RegisterCard;

import React, {useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import AuthTextField from "../../inputs/structure/AuthTextField";
import CredentialsValidatorService from "../../../services/CredentialsValidatorService";
import AuthenticationPasswordTooltip from "../../tooltips/structure/AuthenticationPasswordTooltip";
import {
  passwordWrapperSX,
  registerJobSeekerFormSX, userButtonInputSX,
  userTextInputWrapperSX
} from "../styling/RegisterJobSeekerFormSX";

/**
 * This is the job seeker register form, used alongside the recruiter register form. It has the following elements:
 * Default Message: (Join NewGrad today and browse tech jobs from top tier tech companies.);
 * Name Field;
 * Email Field;
 * Password Field;
 * Confirm Password Field;
 * Password Requirements Tooltip;
 * Create Account Button;
 */
const RegisterJobSeekerForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");

  const [invalidName, setInvalidName] = useState<string | null>(null);
  const [invalidEmail, setInvalidEmail] = useState<string | null>(null);
  const [invalidPassword, setInvalidPassword] = useState<string | null>(null);
  const [invalidCPassword, setInvalidCPassword] = useState<string | null>(null);

  useEffect(() => {
    if (invalidName != null)
      setInvalidName(null);
  }, [name]);

  useEffect(() => {
    if (invalidEmail != null)
      setInvalidEmail(null);
  }, [email]);

  useEffect(() => {
    if (invalidPassword != null)
      setInvalidPassword(null);
  }, [password]);

  useEffect(() => {
    if (invalidCPassword != null)
      setInvalidCPassword(null);
  }, [cpassword]);

  const credentialsValidator = (): void => {
    if (!CredentialsValidatorService.fullNameValidator(name))
      setInvalidName("This is not a valid full name");
    if (!CredentialsValidatorService.emailValidator(email))
      setInvalidEmail("This is not a valid email address");
    if (!CredentialsValidatorService.passwordValidator(password))
      setInvalidPassword("This is not a valid password. Hover over ℹ");
    if (password !== cpassword)
      setInvalidCPassword("Passwords must match");
  }

  const handleCreateAccount = (): void => {
    credentialsValidator();
    // TODO: Add further more functionality
  }

  return (
      <Box id={"register-job-seeker-form"} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        gap: "12px",
        minHeight: "310px"
      }}>
        <Typography variant={"subtitle1"} sx={registerJobSeekerFormSX}>
          Join NewGrad today and browse tech jobs from top tier tech companies.
        </Typography>
        <Box id={"user-text-input-wrapper"} sx={userTextInputWrapperSX}>
          <AuthTextField id={"full-name"} label={"Full Name"} type={"text"} setText={setName} errorMessage={invalidName}/>
          <AuthTextField id={"email"} label={"Email"} type={"email"} setText={setEmail} errorMessage={invalidEmail} />
          <Box id={"password-wrapper"} sx={passwordWrapperSX}>
            <AuthTextField id={"password"} label={"Password"} type={"password"} setText={setPassword} errorMessage={invalidPassword} />
            <AuthTextField id={"confirm-password"} label={"Confirm Password"} type={"password"} setText={setCPassword} errorMessage={invalidCPassword} />
            <AuthenticationPasswordTooltip />
          </Box>
        </Box>
        <Box id={"user-button-input"} sx={userButtonInputSX}>
          <Button id={"create-account"} variant={"contained"} size={"small"} onClick={() => handleCreateAccount()}
                  sx={{textTransform: "none"}}>
            Create account
          </Button>
        </Box>
      </Box>
  );
}

export default RegisterJobSeekerForm;

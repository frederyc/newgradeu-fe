import React, {useEffect, useState} from "react";
import {Box, Button, Typography} from "@mui/material";
import AuthTextField from "../inputs/AuthTextField";
import CredentialsValidatorService from "../../services/CredentialsValidatorService";
import AuthenticationPasswordTooltip from "../tooltips/AuthenticationPasswordTooltip";

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
      <Box id={"register-form-job-seeker"} sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        gap: "12px",
        minHeight: "310px"
      }}>
        <Typography variant={"subtitle1"} sx={{
          color: "#ACB7C0",
          fontSize: "0.95em",
          "@media (max-width: 728px)": {
            fontSize: "0.75em"
          },
        }}>
          Join NewGrad today and browse tech jobs from top tier tech companies.
        </Typography>
        <Box id={"user-text-input-wrapper"} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          "@media (max-width: 728px)": {
            gap: "10px"
          },
        }}>
          <AuthTextField id={"full-name"} label={"Full Name"} type={"text"} setText={setName}
                         errorMessage={invalidName}/>
          <AuthTextField id={"email"} label={"Email"} type={"email"} setText={setEmail} errorMessage={invalidEmail} />
          <Box id={"password-wrapper"} sx={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            "@media (max-width: 728px)": {
              gap: "6px"
            },
          }}>
            <AuthTextField id={"password"} label={"Password"} type={"password"} setText={setPassword}
                           errorMessage={invalidPassword} />
            <AuthTextField id={"confirm-password"} label={"Confirm Password"} type={"password"} setText={setCPassword}
                           errorMessage={invalidCPassword} />
            <AuthenticationPasswordTooltip />
          </Box>
        </Box>
        <Box id={"user-button-input"} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          "@media (max-width: 728px)": {
            gap: "8px"
          },
        }}>
          <Button id={"create-account"} variant={"contained"} size={"small"} onClick={() => handleCreateAccount()} sx={{
            textTransform: "none"
          }}>
            Create account
          </Button>
        </Box>
      </Box>
  );
}

export default RegisterJobSeekerForm;

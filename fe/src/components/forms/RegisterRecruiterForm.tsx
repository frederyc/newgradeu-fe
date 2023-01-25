import React, {SyntheticEvent, useEffect, useState} from "react";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box, Button,
  TextField,
  Typography
} from "@mui/material";
import AuthTextField from "../inputs/AuthTextField";
import AuthenticationPasswordTooltip from "../tooltips/AuthenticationPasswordTooltip";
import CredentialsValidatorService from "../../services/CredentialsValidatorService";

/**
 * This is the register form, used alongside the job seeker register form. It has the following elements:
 * Default Message: (Join NewGrad today and browse tech jobs from top tier tech companies.);
 * Name Field;
 * Company Email Field; (recruiter accounts must use valid company emails)
 * Company Name Field;
 * Password Field;
 * Confirm Password Field;
 * Password Requirements Tooltip;
 * Request Account Button (all recruiter accounts must be manually verified by an admin)
 */
const RegisterRecruiterForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCPassword] = useState<string>("");

  const [invalidName, setInvalidName] = useState<string | null>(null);
  const [invalidEmail, setInvalidEmail] = useState<string | null>(null);
  const [invalidCompany, setInvalidCompany] = useState<string | null>(null);
  const [invalidPassword, setInvalidPassword] = useState<string | null>(null);
  const [invalidCPassword, setInvalidCPassword] = useState<string | null>(null);

  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
  ]

  useEffect(() => {
    if (invalidName != null)
      setInvalidName(null);
  }, [name]);

  useEffect(() => {
    if (invalidEmail != null)
      setInvalidEmail(null);
  }, [email]);

  useEffect(() => {
    if (invalidCompany != null)
      setInvalidCompany(null)
  }, [company]);

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
    if (!CredentialsValidatorService.companyNameValidator(company))
      setInvalidCompany("This is not a valid company name");
    if (!CredentialsValidatorService.emailValidator(email))
      setInvalidEmail("This is not a valid email address");
    if (!CredentialsValidatorService.passwordValidator(password))
      setInvalidPassword("This is not a valid password. Hover over ℹ");
    if (password !== cpassword)
      setInvalidCPassword("Passwords must match");
  }

  const handleRequestAccount = (): void => {
    credentialsValidator();
    // TODO: Further add functionality
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
          Find the greatest talent in Europe and beyond!
        </Typography>
        <Box id={"user-text-input-wrapper"} sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          "@media (max-width: 728px)": {
            gap: "10px"
          },
        }}>
          <AuthTextField id={"full-name"} label={"Full Name"} type={"test"} setText={setName}
                         errorMessage={invalidName} />
          <AuthTextField id={"email"} label={"Company Email"} type={"email"} setText={setEmail}
                         errorMessage={invalidEmail} />
          <Autocomplete
              freeSolo
              onInputChange={(event: SyntheticEvent, newValue: string) => setCompany(newValue)}
              renderInput={(params: AutocompleteRenderInputParams) =>
                  <TextField {...params} label={"Company"} required fullWidth size={"small"} type={"text"}
                    error={invalidCompany != null && invalidCompany !== ""}
                    helperText={invalidCompany}
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: '#8083FF',
                        "@media (max-width: 728px)": {
                          fontSize: "0.85em"
                        },
                      },
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": {
                          borderColor: "#8083FF",
                          borderWidth: "2px"
                        },
                      },
                      "& .MuiAutocomplete-clearIndicator": {
                        color: "#8083FF"
                      },
                      "& .MuiAutocomplete-popupIndicator": {
                        color: "#8083FF"
                      }
                    }}
                  />
              }
              options={top100Films}
          />
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
                           errorMessage={invalidCPassword}/>
            <AuthenticationPasswordTooltip />
          </Box>
          <Button id={"request-account"} variant={"contained"} size={"small"} onClick={() => handleRequestAccount()}
            sx={{
              textTransform: "none"
          }}>
            Request Account
          </Button>
        </Box>
      </Box>
  );
}

export default RegisterRecruiterForm;

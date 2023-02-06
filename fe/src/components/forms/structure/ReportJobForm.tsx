import react, {useEffect, useState} from "react";
import {
  Box, Button,
  FormControl,
  InputLabel,
  MenuItem,
  Palette,
  Select,
  SelectChangeEvent,
  TextField,
  useTheme
} from "@mui/material";
import ChromaticsService from "../../../services/ChromaticsService";
import React from "react";
import {reportJobFormSX} from "../styling/ReportJobFormSX";

const reportReasons: string[] = [
  "Job does not comply with website's policy (ex: 4+ yoe required)",
  "Job is no longer available",
  "Job has incorrect details",
  "It's spam, scam or promotional",
  "It's discriminatory or offensive",
  "Other (mention in the description section)"
]

type ReportJobFormParams = {
  jobId: string
}

const ReportJobForm = (params: ReportJobFormParams) => {
  const palette: Palette = useTheme().palette;
  //@ts-ignore
  const darkThemeActive = palette.type === "dark";

  const [reason, setReason] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleReasonChange = (event: SelectChangeEvent) => setReason(event.target.value as string);
  const handleSubmitReport = () => {

  }

  useEffect(() => {
    return () => {
      // reset details and reason field
      setReason("");
      setDescription("");
    };
  }, []);

  return (
    <Box id={"report-job-form"} sx={reportJobFormSX}>
      <Box id={"job-report-form"} sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
        <FormControl fullWidth required size={"small"} sx={{
          "& .MuiFormLabel-label": {
            color: "red"
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: palette.background.default,
            color: palette.text.secondary,
            "& fieldset": {
              border: `2px solid ${palette.background.default}`,
            },
            "&:hover fieldset": {
              borderColor: ChromaticsService.adjustColorLightness(
                  palette.background.default,
                  10 * (darkThemeActive ? 1 : -1)
              ),
            },
            "&.Mui-focused fieldset": {
              borderColor: ChromaticsService.adjustColorLightness(
                  palette.background.default,
                  15 * (darkThemeActive ? 1 : -1)
              ),
            },
          }
        }}>
          <InputLabel>Reason</InputLabel>
          <Select value={reason} onChange={handleReasonChange} label={"Reason"}>
            {
              reportReasons.map(x => <MenuItem value={x}>{x}</MenuItem>)
            }
          </Select>
        </FormControl>
        <TextField variant={"outlined"} label={"Description"} required multiline rows={5}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setDescription(e.target.value)}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              backgroundColor: palette.background.default,
              color: palette.text.secondary,
              "& fieldset": {
                border: `2px solid ${palette.background.default}`
              },
              "&:hover fieldset": {
                borderColor: ChromaticsService.adjustColorLightness(
                    palette.background.default,
                    10 * (darkThemeActive ? 1 : -1)
                ),
              },
              "&.Mui-focused fieldset": {
                borderColor: ChromaticsService.adjustColorLightness(
                    palette.background.default,
                    15 * (darkThemeActive ? 1 : -1)
                ),
              }
          }
        }}/>
      </Box>
      <Button fullWidth variant={"contained"} size={"small"} onClick={handleSubmitReport}
        disabled={ reason === "" || description === "" } sx={{
        textTransform: "none",
        "&:disabled": {
          color: "#A6A6A6"
        }
      }}>Submit report</Button>
    </Box>
  );
}

export default ReportJobForm;

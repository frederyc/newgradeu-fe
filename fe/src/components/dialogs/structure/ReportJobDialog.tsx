import react, {useContext, useEffect, useState} from "react";
import {
  Box,
  Dialog,
  DialogContent, IconButton,
  Palette, Typography, useTheme
} from "@mui/material";
import MetaLogo from "../../../resources/images/meta_128x128_test.jpg";
import ReportJobForm from "../../forms/structure/ReportJobForm";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import React from "react";
import JobEntryContext from "../../../contexts/JobEntryContext";
import JobEntryData from "../../../types/interfaces/JobEntryData";
import CancelIcon from '@mui/icons-material/Cancel';
import {
  cancelIconSX,
  companyNameSX,
  jobDetailsSX,
  jobTitleSX,
  logoImgSX,
  reportJobDialogContentSX
} from "../styling/ReportJobDialogSX";

type ReportJobDialogParams = {
  isOpen: boolean,
  onClose: (...args: any[]) => any
}

const ReportJobDialog = (params: ReportJobDialogParams) => {
  const palette: Palette = useTheme().palette;
  const wd: WindowDimensions = useWindowDimensions();
  const jobData: JobEntryData = useContext(JobEntryContext)!;

  return (
    <Dialog id={"report-job-dialog"}
            fullWidth={true}
            maxWidth={wd.width <= 1000 ? false : "sm"}
            open={params.isOpen}
            onClose={params.onClose}>
      <DialogContent sx={reportJobDialogContentSX}>
        <Box id={"job-details"} sx={jobDetailsSX}>
          <img src={MetaLogo} alt={"cannot load image"} style={logoImgSX} />
          <Box id={"job-title-company"} sx={{width: "100%"}}>
            <Typography variant={"h6"} noWrap sx={companyNameSX(palette)}>{ jobData.companyName }</Typography>
            <Typography variant={"subtitle1"} noWrap sx={jobTitleSX(palette)}>{ jobData.title }</Typography>
          </Box>
          <IconButton sx={cancelIconSX} onClick={params.onClose} children={
            <CancelIcon sx={{color: palette.primary.main}} />
          } />
        </Box>
        <ReportJobForm jobId={jobData.id}  />
      </DialogContent>
    </Dialog>
  );
}

export default ReportJobDialog;

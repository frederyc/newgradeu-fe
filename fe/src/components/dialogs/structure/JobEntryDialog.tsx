import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton, Palette,
  Typography,
  useTheme
} from "@mui/material";
import JobEntryData from "../../../types/interfaces/JobEntryData";
import {useContext} from "react";
import JobEntryContext from "../../../contexts/JobEntryContext";
import MetaLogo from "../../../resources/images/meta_128x128_test.jpg";
import ChromaticsService from "../../../services/ChromaticsService";
import CancelIcon from '@mui/icons-material/Cancel';
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";
import PlaceIcon from '@mui/icons-material/Place';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import StairsIcon from '@mui/icons-material/Stairs';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import JobEntryTag from "../../chips/structure/JobEntryTag";
import {
  cancelIconSX,
  companyLogoSX, companyNameSX,
  jobEntryDialogContentSX,
  jobEntryDialogSX,
  logoOptionsSX, mainContentSX, moreDetailsSX, skillsWrapperSX, tagsWrapperSX, titleSX, wrapperMoreJobDetailsSX
} from "../styling/JobEntryDialogSX";

type JobCardDialogParams = {
  logoRef: HTMLImageElement | null
  isOpen: boolean,
  onClose: (...args: any[]) => any
}

const JobEntryDialog = (params: JobCardDialogParams) => {
  const palette: Palette = useTheme().palette;
  const jobData: JobEntryData = useContext(JobEntryContext)!;
  const wd: WindowDimensions = useWindowDimensions();

  return (
      <Dialog id={"job-entry-dialog"}
        fullScreen={wd.width <= 1000}
        open={params.isOpen} onClose={params.onClose}
        maxWidth={"md"} fullWidth={true} sx={jobEntryDialogSX}>
        <DialogContent sx={jobEntryDialogContentSX}>
          <Box id={"logo-options"} sx={logoOptionsSX(params.logoRef)}>
            <img src={MetaLogo} alt={"cannot load image"} style={companyLogoSX} />
            <IconButton sx={cancelIconSX} children={<CancelIcon />} onClick={params.onClose} />
          </Box>
          <Box id={"main-content"} sx={mainContentSX}>
            <Box id={"main-details"}>
              <Typography variant={"h3"} sx={titleSX}>{jobData.title}</Typography>
              <Typography variant={"h4"} sx={companyNameSX}>{jobData.companyName}</Typography>
              <Box id={"wrapper-geolocation-employmentType-educationLevel-level-workArrangement-salary"}
                   sx={wrapperMoreJobDetailsSX}>
                <JobEntryTag icon={<PlaceIcon fontSize={"small"} />} tag={jobData.geolocation} />
                <JobEntryTag icon={<WorkHistoryIcon fontSize={"small"} />} tag={jobData.workTime} />
                <JobEntryTag icon={<SchoolIcon fontSize={"small"} />} tag={jobData.education} />
                <JobEntryTag icon={<StairsIcon fontSize={"small"} />} tag={jobData.seniority} />
                <JobEntryTag icon={<BusinessIcon fontSize={"small"} />} tag={jobData.workArrangement} />
                {
                  jobData.salary
                      ? <JobEntryTag icon={<AccountBalanceWalletIcon fontSize={"small"}/>} tag={jobData.salary} />
                      : <></>
                }
              </Box>
            </Box>
            <Box id={"more-details"} sx={moreDetailsSX}>
              <Box id={"details-section-wrapper"}>
                <Typography variant={"h4"}>Description</Typography>
                <Typography variant={"body1"} sx={{fontSize: "0.85em"}}>
                  {jobData.description}
                </Typography>
              </Box>
              <Box id={"skills-wrapper"} sx={skillsWrapperSX(wd)}>
                <Box id={"details-section-wrapper"} sx={{width: `${wd.width <= 1000 ? 100 : 50}%`}}>
                  <Typography variant={"h4"}>Required skills</Typography>
                  <ul style={{margin: "0px"}}>
                    {
                      jobData.requiredSkills.map(x =>
                          <li><Typography variant={"body1"} sx={{fontSize: "0.85em"}}>{x}</Typography></li>
                      )
                    }
                  </ul>
                </Box>
                <Box id={"details-section-wrapper"} sx={{width: `${wd.width <= 1000 ? 100 : 50}%`}}>
                  <Typography variant={"h4"}>Preferred skills</Typography>
                  <ul style={{margin: "0px"}}>
                    {
                      jobData.preferredSkills.map(x =>
                          <li><Typography variant={"body1"} sx={{fontSize: "0.85em"}}>{x}</Typography></li>
                      )
                    }
                  </ul>
                </Box>
              </Box>
              <Box id={"details-section-wrapper"}>
                <Typography variant={"h4"}>Tags</Typography>
                <Box id={"tags-wrapper"} sx={tagsWrapperSX}>
                  {
                    jobData.tags.map(x => <JobEntryTag tag={x} />)
                  }
                </Box>
              </Box>
            </Box>
            <Button variant={"contained"} size={"large"} sx={{textTransform: "none"}}>Apply</Button>
          </Box>
        </DialogContent>
      </Dialog>
  )
}

export default JobEntryDialog;

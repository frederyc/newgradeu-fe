import react from "react";
import {ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";

type JobCardMenuItemParams = {
  jobId: string,
  icon: react.ReactNode,
  text: string,
  additionalText?: string,
  onClick: (...args: any[]) => any
}

const JobEntryMenuItem = (params: JobCardMenuItemParams) => {
  return (
      <MenuItem id={"job-entry-menu-item"} onClick={params.onClick}>
        <ListItemIcon>
          { params.icon }
        </ListItemIcon>
        <ListItemText>
          { params.text }
        </ListItemText>
        {
          params.additionalText
              ? <Typography variant={"body2"}>{ params.additionalText }</Typography>
              : <></>
        }
      </MenuItem>
  );
}

export default JobEntryMenuItem;

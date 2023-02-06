import react, {useEffect, useRef, useState} from "react";
import {Box, IconButton, Palette, Typography, useTheme} from "@mui/material";
import MetaLogo from "../../../resources/images/meta_128x128_test.jpg";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import JobEntryTag from "../../chips/structure/JobEntryTag";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import JobEntryMenu from "../../menus/structure/JobEntryMenu/JobEntryMenu";
import JobEntryMenuItem from "../../menus/structure/JobEntryMenu/JobEntryMenuItem";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReportIcon from '@mui/icons-material/Report';
import ReportJobDialog from "../../dialogs/structure/ReportJobDialog";
import JobEntryContext from "../../../contexts/JobEntryContext";
import JobEntryData from "../../../types/interfaces/JobEntryData";
import JobEntryDialog from "../../dialogs/structure/JobEntryDialog";

import {
  companyLogoSX, h6TextPrimarySX,
  sub1TextPrimarySX,
  contentHeaderSX, sub1ThemePrimarySX,
  jobEntryCardSX,
  mainDetailsSX, moreOptionsSX, contentMainSX, titleH5SX, tagsBoxSX, descriptionSub2SX
} from "../styling/JobEntryCardSX";

const JobEntryCard = (params: JobEntryData) => {
  const palette: Palette = useTheme().palette;
  const [isSaved, setIsSaved] = useState<boolean>(false);            // This should be updated when the job is loaded
  const jobEntryCardRef = useRef<HTMLElement>(null);                 // Read the comment above 'handleClick'
  /**
   * If not null, the options bar is open. We need to NOT catch the click on the JobCard element, it will prompt us to
   * the job dialog, which we do not want. Also, we want to have the cursor as 'default' when optionsDialog is open.
   */
  const [moreOptionsAnchorEl, setMoreOptionsAnchorEl] = useState<HTMLElement | null>(null);
  const openMoreOptionsMenu = (event: react.MouseEvent<HTMLElement>) => setMoreOptionsAnchorEl(event.currentTarget);
  const closeMoreOptionsMenu = () => setMoreOptionsAnchorEl(null);

  const [isOpenReportDialog, setIsOpenReportDialog] = useState<boolean>(false);
  const [isOpenJobDialog, setIsOpenJobDialog] = useState<boolean>(false);

  /**
   * We use the hook that returns the dimensions of the screen in real time to handle the data in the header. For mobile
   * screens, we have to prioritize different fields, for example, where on desktop we have the company's name, on phone
   * we'll have the job title
   */
  const wd: WindowDimensions = useWindowDimensions();

  /**
   * This function handles the click on the job card, which will prompt the user to a dialog displaying more details
   * about the position. The if (...) below checks if the current clicked element is a direct child of the job's card
   * component tree. We have to perform this check to avoid bugs like:
   * - Clicking randomly on an open dialog that's over another job will trigger the job card's onClick() function
   * - Clicking a button in the moreOptionsMenu can trigger another job card's onClick()
   * The functionality should be placed only inside the if block for this function
   * @param e
   */
  const handleClick = (e: react.MouseEvent<HTMLDivElement>) => {
    if (jobEntryCardRef.current && jobEntryCardRef.current.contains(e.target as HTMLElement)) {
      console.log("test button");
      setIsOpenJobDialog(true);
    }
  }

  // Here we handle the action that's fired when we click the 3-bullet top-right button
  const handleMoreOptions = (e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // Since the MoreOptions button is on the JobCard, we must stop the click from propagating and open a Job dialog
    e.stopPropagation();
    openMoreOptionsMenu(e);
  }

  // Handles the save action in the 'moreOptionsMenu'
  const handleSave = (e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    // TODO: interact with database
  }

  // Handlers for different options in the 'moreOptions' menu
  const handleOnReport = (e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    closeMoreOptionsMenu();
    setIsOpenReportDialog(true);
  }

  // Reference of the logo image, to be passed to the job dialog, in order to get the background color of the image
  const logoRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  /**
   * This is a workaround I created for the height of the description text in the job entry card. The title can occupy
   * either 1 or 2 lines of text, so we somehow got to know how many. I observed that, if the text is one line, the
   * element occupies around 20px, while if it's 2, it's 40px. I've tried to use the useRef() hook, but the screen
   * renders to fast for it to catch the actual value, so here is what I've done:
   * Caught the ref in the useEffect() hook, when the component is done rendering, and update a stateful value
   * representing the height (px), of the description text.
   */
  const [descriptionHeight, setDescriptionHeight] = useState<number>(0);
  useEffect(() => {
    setDescriptionHeight(titleRef.current!.offsetHeight < 40 ? 136 : 114);
  }, []);

  return (
    <JobEntryContext.Provider value={params}>
      <Box id={"job-entry-card"} ref={jobEntryCardRef} sx={jobEntryCardSX(palette)}
        onClick={(e: react.MouseEvent<HTMLDivElement>) => handleClick(e)}>
        <JobEntryDialog isOpen={isOpenJobDialog} logoRef={logoRef.current} onClose={() => setIsOpenJobDialog(false)}/>
        <Box id={"content-header"} sx={contentHeaderSX}>
          <img id={"company-logo"} src={MetaLogo} ref={logoRef} alt={"cannot load image"} style={companyLogoSX} />
          <Box id={"main-details"} sx={mainDetailsSX}>
            {
              // For desktop, we'll display the company's name on the top, for the mobile, we'll display the job's title
              wd.width > 1000
                ? <Typography id={"company-name"} variant={"h6"} noWrap sx={h6TextPrimarySX(palette, wd)}>
                    {params.companyName}
                  </Typography>
                : <Typography id={"title-mobile"} variant={"h6"} noWrap sx={h6TextPrimarySX(palette, wd)}>
                    {params.title}
                  </Typography>
            }
            {
              // For desktop, the second row will display the Location, for the mobile, it will display company's name
              wd.width > 1000
              ? <Typography id={"geolocation"} variant={"subtitle1"} noWrap sx={sub1ThemePrimarySX(palette)}>
                    {params.geolocation}
                </Typography>
              : <Typography id={"company-name-mobile"} variant={"subtitle1"} noWrap
                            sx={sub1TextPrimarySX(palette)}>
                    {params.companyName}
                </Typography>
            }
            {
              wd.width > 1000 ? (
                  params.salary ? <Typography id={"salary"} variant={"subtitle1"} noWrap sx={sub1ThemePrimarySX(palette)}>
                    {params.salary}
                  </Typography> : <></>
              ) : <>
                <Typography id={"geolocation-mobile"} variant={"subtitle1"} noWrap
                            sx={sub1ThemePrimarySX(palette)}>
                  {params.geolocation}
                </Typography>
                {
                  params.salary
                    ? <Typography id={"salary-mobile"} variant={"subtitle1"} noWrap sx={sub1TextPrimarySX(palette)}>
                        {params.salary}
                      </Typography>
                    : <></>
                }
              </>
            }
          </Box>
          <ReportJobDialog
              isOpen={isOpenReportDialog}
              onClose={() => setIsOpenReportDialog(false)} />
          <JobEntryMenu
              jobId={params.id}
              anchorEl={moreOptionsAnchorEl}
              onClose={closeMoreOptionsMenu}
              children={[
                <JobEntryMenuItem
                    jobId={params.id}
                    icon={isSaved
                        ? <BookmarkIcon fontSize={"small"} sx={{color: palette.text.primary}} />
                        : <BookmarkBorderIcon fontSize={"small"} sx={{color: palette.text.primary}} />
                    }
                    text={isSaved ? "Unsave" : "Save"}
                    onClick={(e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSave(e)} />,
                <JobEntryMenuItem
                    jobId={params.id}
                    icon={<ReportIcon fontSize={"small"} sx={{color: palette.text.primary}} />}
                    text={"Report"}
                    onClick={(e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => handleOnReport(e)} />
              ]}
          />
          <IconButton
              children={<MoreHorizIcon />}
              onClick={(e: react.MouseEvent<HTMLButtonElement, MouseEvent>) => handleMoreOptions(e)}
              sx={moreOptionsSX(palette)}
          />
        </Box>
        <Box id={"content-main"} sx={contentMainSX}>
          {/*Should limit job title to 50 characters*/}
          <Typography id={"title"} ref={titleRef} variant={"h5"} sx={titleH5SX}>
            {params.title}
          </Typography>
          <Typography id={"description"} ref={descriptionRef} variant={"subtitle2"} sx={descriptionSub2SX(palette, descriptionHeight)}>
            {params.description}
          </Typography>
          <Box id={"tags"} sx={tagsBoxSX}>
            { params.tags.filter((_: string, index: number) => index < 3).map(tag => <JobEntryTag tag={tag} />) }
          </Box>
        </Box>
      </Box>
    </JobEntryContext.Provider>
  );
};

export default JobEntryCard;

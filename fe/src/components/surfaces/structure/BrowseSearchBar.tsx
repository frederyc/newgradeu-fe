import {useState} from "react";
import {Box} from "@mui/material";
import React from "react";
import SearchTextField from "../../inputs/structure/SearchTextField";
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SquareIconButton from "../../buttons/structure/SquareIconButton";
import {actionButtonsWrapperSX, browseSearchBarSX, searchInputsWrapperSX} from "../styling/BrowseSearchBarSX";
import FilterJobsMenu from "../../menus/structure/FilterJobsMenu";

const BrowseSearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
      <Box id={"browse-search-bar"} sx={browseSearchBarSX}>
        <Box id={"search-inputs-wrapper"} sx={searchInputsWrapperSX}>
          <SearchTextField placeHolder={"Search jobs"} inputType={"search"} icon={<SearchIcon />} setText={setSearch} />
          <SearchTextField icon={<PlaceIcon />} placeHolder={"City or country"} inputType={"search"} setText={setLocation} />
        </Box>
        <Box id={"action-buttons-wrapper"} sx={actionButtonsWrapperSX}>
          <SquareIconButton icon={<FilterAltIcon />} onClick={() => setOpenFilter(true)} variant={"theme"} />
          <FilterJobsMenu isOpen={openFilter} onClose={() => setOpenFilter(false)} />
          <SquareIconButton icon={<SearchIcon />} onClick={() => {}} variant={"primary"} />
        </Box>
      </Box>
  )
}

export default BrowseSearchBar;

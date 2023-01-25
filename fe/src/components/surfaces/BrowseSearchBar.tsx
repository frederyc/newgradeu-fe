import {useState} from "react";
import {Box} from "@mui/material";
import React from "react";
import SearchTextField from "../inputs/SearchTextField";
import SearchIcon from '@mui/icons-material/Search';
import PlaceIcon from '@mui/icons-material/Place';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SquareIconButton from "../buttons/SquareIconButton";

const BrowseSearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
      <Box id={"browse-search-bar"} sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "12px",
        "@media (max-width: 728px)": {
          padding: "6px",
          gap: "6px"
        },
      }}>
        <Box id={"search-inputs-wrapper"} sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          "@media (max-width: 728px)": {
            flexDirection: "column",
            gap: "6px"
          }
        }}>
          <SearchTextField placeHolder={"Search jobs"} inputType={"search"} icon={<SearchIcon />} setText={setSearch} />
          <SearchTextField icon={<PlaceIcon />} placeHolder={"City or country"} inputType={"search"} setText={setLocation} />
        </Box>
        <Box id={"action-buttons-wrapper"} sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          "@media (max-width: 728px)": {
            flexDirection: "column",
            gap: "6px"
          }
        }}>
          <SquareIconButton icon={<FilterAltIcon />} onClick={() => {}} variant={"theme"} />
          <SquareIconButton icon={<SearchIcon />} onClick={() => {}} variant={"primary"} />
        </Box>
      </Box>
  )
}

export default BrowseSearchBar;

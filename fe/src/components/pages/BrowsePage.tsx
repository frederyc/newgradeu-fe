import {Box} from "@mui/material";
import BaseSearchBar from "../surfaces/BaseSearchBar";
import BrowseSearchBar from "../surfaces/BrowseSearchBar";

const BrowsePage = () => {
  return (
    <Box>
      <BaseSearchBar content={<BrowseSearchBar />} />
    </Box>
  );
}

export default BrowsePage;

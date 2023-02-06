import {Box} from "@mui/material";
import BaseSearchBar from "../../surfaces/structure/BaseSearchBar";
import BrowseSearchBar from "../../surfaces/structure/BrowseSearchBar";
import JobEntryCard from "../../cards/structure/JobEntryCard";
import {BrowsePageSX, BrowsePageWrapperSX} from "../styling/BrowsePageSX";

const BrowsePage = () => {
  return (
    <Box id={"browse-page"} sx={BrowsePageSX}>
      <BaseSearchBar content={<BrowseSearchBar />} />
      <Box id={"browse-page-wrapper"} sx={BrowsePageWrapperSX}>
        <JobEntryCard
            id={"512da2"}
            companyImage={""}
            companyName={"Facebook"}
            geolocation={"London, England, UK"}
            title={"Software Engineer I, Fulllstack junior Lok"}
            salary={"$100.5k-$110.5k/yr"}
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
            tags={["Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", "Software", "Hardware", "AI/ML", ]}
            education={"None"}
            preferredSkills={["Motivation Motivation Motivation Motivation Motivation Motivation Motivation Motivation Motivation Motivation Motivation ", "Ambition", "Motivation", "Ambition", "Motivation", "Ambition", "Motivation", "Ambition", "Motivation", "Ambition", "Ambition", "Ambition",]}
            requiredSkills={["AWSAWSAWSAdas sdsd sds sdsd s sd sds s ds s sds sdsd s sd sds s ds s sds sdsd s sd sds s ds s", "Smart kitty"]}
            seniority={"Internship"}
            workArrangement={"Office"}
            workTime={"40h/week"}
        />
        <JobEntryCard
            id={"314512"}
            companyImage={""}
            companyName={"JP Morgan Chase"}
            geolocation={"London, England, UK"}
            title={"Software Engineer I"}
            salary={"$100.5k-$110.5k/yr"}
            description={"Lorem ipsum si din alea"}
            tags={["Software", "Hardware", "AI/ML"]}
            education={"PhD"}
            preferredSkills={["Motivation", "Ambition"]}
            requiredSkills={["AWS", "Smart kitty"]}
            seniority={"Internship"}
            workArrangement={"Office"}
            workTime={"40h/week"}
        />
        <JobEntryCard
            id={"976546"}
            companyImage={""}
            companyName={"JP Morgan Chase"}
            geolocation={"London, England, UK"}
            title={"Software Engineer, University Graduate - Fullstack Developer"}
            description={"Lorem ipsum si din alea"}
            tags={["Software", "Hardware", "AI/ML"]}
            education={"Master"}
            preferredSkills={["Motivation", "Ambition"]}
            requiredSkills={["AWS", "Smart kitty"]}
            seniority={"Internship"}
            workArrangement={"Office"}
            workTime={"40h/week"}
        />
      </Box>
    </Box>
  );
}

export default BrowsePage;

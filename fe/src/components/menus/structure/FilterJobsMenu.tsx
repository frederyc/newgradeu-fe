import react, {useState} from "react";
import {Box, Checkbox, Drawer, FormControlLabel, Palette, Typography, useTheme} from "@mui/material";
import WindowDimensions from "../../../types/interfaces/WindowDimensions";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {Education, Seniority, WorkArrangement, WorkTime} from "../../../types/types/JobEntryTypes";
import {
  categoriesWrapperSX,
  filterCategorySX,
  filterCategoryTitleSX,
  filterJobsMenuSX, filterOptionsWrapperSX,
  innerBoxSX,
  menuTitleSX
} from "../styling/FilterJobsMenuSX";
import AutocompleteCheckboxes from "../../inputs/structure/AutocompleteCheckboxes";

type FilterJobsMenuParams = {
  isOpen: boolean,
  onClose: (...args: any[]) => any
}

const workTimes: WorkTime[] = ["20h/week", "30h/week", "40h/week"];
const seniorities: Seniority[] = ["Internship", "Working student", "New Grad"];
const workArrangements: WorkArrangement[] = ["Office", "Hybrid", "Remote"];
const educations: Education[] = ["None", "Bachelor", "Master", "PhD"];
const tags: string[] = [".NET", "Agile", "AI/ML", "AWS", "Apache Cassandra", "Apache Spark", "AR/VR", "Azure", "Babel",
  "BDD", "Blockchain", "Cassandra", "CI/CD", "C#", "Cryptography", "Django", "Docker", "Elasticsearch", "Embedded",
  "Express.js", "Flask", "Flutter", "Frontend", "Fullstack", "GCP", "Gatsby", "Go", "GraphQL", "Hadoop", "IoT", "Java",
  "JavaScript", "Jenkins", "Jira", "JWT", "Kanban", "Kerberos", "Kotlin", "LDAP", "Laravel", "Microservices",
  "Microsoft SQL Server", "MongoDB", "MySQL", "Next.js", "Node.js", "NoSQL", "Objective-C", "OAuth", "OpenCV", "Oracle",
  "PHP", "PostgreSQL", "PyTorch", "Python", "RabbitMQ", "React", "React Native", "Redis", "REST API", "Ruby",
  "Ruby on Rails", "SAML", "Scrum", "Sinatra", "SQL", "Spring", "Swift", "TDD", "TensorFlow", "TypeScript", "UI5",
  "Unreal Engine", "Unity", "Xamarin"
];

const FilterJobsMenu = (params: FilterJobsMenuParams) => {
  const wd: WindowDimensions = useWindowDimensions();
  const palette: Palette = useTheme().palette;
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
      <Drawer id={"filter-jobs-menu"} onClose={params.onClose} open={params.isOpen}
              anchor={wd.width <= 1000 ? "bottom" : "right"} sx={filterJobsMenuSX(palette, wd)}>
        <Box id={"inner-box"} sx={innerBoxSX}>
          <Typography id={"menu-title"} variant={"h3"} sx={menuTitleSX(palette)}>Filtering</Typography>
          <Box id={"categories-wrapper"} sx={categoriesWrapperSX}>
            <Box id={"category-item"}>
              <Typography id={"filter-category-title"} sx={filterCategoryTitleSX}>Work time</Typography>
              <Box id={"filter-options-wrapper"} sx={filterOptionsWrapperSX(palette)}>
                { workTimes.map(x => <FormControlLabel control={<Checkbox disableRipple />} label={x} />) }
              </Box>
            </Box>
            <Box id={"category-item"}>
              <Typography id={"filter-category-title"} sx={filterCategoryTitleSX}>Seniority level</Typography>
              <Box id={"filter-options-wrapper"} sx={filterOptionsWrapperSX(palette)}>
                { seniorities.map(x => <FormControlLabel control={<Checkbox disableRipple />} label={x} />) }
              </Box>
            </Box>
            <Box id={"category-item"}>
              <Typography id={"filter-category-title"} sx={filterCategoryTitleSX}>Work Arrangement</Typography>
              <Box id={"filter-options-wrapper"} sx={filterOptionsWrapperSX(palette)}>
                { workArrangements.map(x => <FormControlLabel control={<Checkbox disableRipple />} label={x} />) }
              </Box>
            </Box>
            <Box id={"category-item"}>
              <Typography id={"filter-category-title"} sx={filterCategoryTitleSX}>Education</Typography>
              <Box id={"filter-options-wrapper"} sx={filterOptionsWrapperSX(palette)}>
                { educations.map(x => <FormControlLabel control={<Checkbox disableRipple />} label={x} />) }
              </Box>
            </Box>
            <AutocompleteCheckboxes options={tags} name={"Tags"}
                                    selectedOptions={selectedOptions}
                                    setSelectedOptions={setSelectedOptions} />
          </Box>
        </Box>
      </Drawer>
  );
}

export default FilterJobsMenu;

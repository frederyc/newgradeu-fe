import { createContext } from "react";
import JobEntryData from "../types/interfaces/JobEntryData";

const JobEntryContext = createContext<JobEntryData | null>(null);
export default JobEntryContext;

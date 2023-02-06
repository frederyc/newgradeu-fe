import {Education, Seniority, WorkArrangement, WorkTime} from "../types/JobEntryTypes";

export default interface JobEntryData {
  id: string,
  title: string,
  companyName: string,
  companyImage: string,     // maybe byte[], idk yet
  description: string,
  requiredSkills: string[],
  preferredSkills: string[],
  tags: string[],
  geolocation: string,
  workArrangement: WorkArrangement,
  education: Education,
  seniority: Seniority,
  workTime: WorkTime,
  salary?: string
  // TODO add more of them
}

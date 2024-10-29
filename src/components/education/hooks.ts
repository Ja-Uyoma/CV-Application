import { create } from "zustand";

export type EducationData = {
  education: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Action = {
  updateEducation: (education: EducationData["education"]) => void;
  updateSchool: (school: EducationData["school"]) => void;
  updateStartDate: (startDate: EducationData["startDate"]) => void;
  updateEndDate: (endDate: EducationData["endDate"]) => void;
  updateDescription: (description: EducationData["description"]) => void;
};

export const useEducationStore = create<EducationData & Action>()((set) => ({
  education: "",
  school: "",
  startDate: "",
  endDate: "",
  description: "",
  updateEducation: (education) => set(() => ({ education: education })),
  updateSchool: (school) => set(() => ({ school: school })),
  updateStartDate: (startDate) => set(() => ({ startDate: startDate })),
  updateEndDate: (endDate) => set(() => ({ endDate: endDate })),
  updateDescription: (description) => set(() => ({ description: description })),
}));

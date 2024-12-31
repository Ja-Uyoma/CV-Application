import { create } from "zustand";
import { EducationAction, EducationState } from "./types";

const useStore = create<EducationState & EducationAction>()((set) => ({
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

export { useStore as useEducationStore };

import { create } from "zustand";

export type State = {
  education: string;
  school: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Action = {
  updateEducation: (education: State["education"]) => void;
  updateSchool: (school: State["school"]) => void;
  updateStartDate: (startDate: State["startDate"]) => void;
  updateEndDate: (endDate: State["endDate"]) => void;
  updateDescription: (description: State["description"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
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

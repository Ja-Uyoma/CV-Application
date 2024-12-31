import { create } from "zustand";
import { SkillsAction, SkillsState } from "./types";

const useStore = create<SkillsState & SkillsAction>()((set) => ({
  skills: "",
  updateSkills: (description) => set(() => ({ skills: description })),
}));

export { useStore as useSkillsStore };

import { create } from "zustand";
import { SkillsAction, SkillsState } from "./types";

export const useStore = create<SkillsState & SkillsAction>()((set) => ({
  skills: "",
  updateSkills: (description) => set(() => ({ skills: description })),
}));

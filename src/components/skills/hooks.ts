import { create } from "zustand";

export type State = {
  skills: string;
};

type Action = {
  updateSkills: (description: State["skills"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  skills: "",
  updateSkills: (description) => set(() => ({ skills: description })),
}));

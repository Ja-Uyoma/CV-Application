import { create } from "zustand";

export type State = {
  qualifications: string;
};

type Action = {
  updateQualifications: (description: State["qualifications"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  qualifications: "",
  updateQualifications: (qualifications) =>
    set(() => ({ qualifications: qualifications })),
}));

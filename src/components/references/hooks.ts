import { create } from "zustand";

export type State = {
  references: string;
};

type Action = {
  updateReferences: (description: State["references"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  references: "",
  updateReferences: (references) => set(() => ({ references: references })),
}));

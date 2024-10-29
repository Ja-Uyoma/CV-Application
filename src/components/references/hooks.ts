import { create } from "zustand";
import { ReferencesAction, ReferencesState } from "./types";

export const useStore = create<ReferencesState & ReferencesAction>()((set) => ({
  references: "",
  updateReferences: (references) => set(() => ({ references: references })),
}));

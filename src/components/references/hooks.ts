import { create } from "zustand";
import { ReferencesAction, ReferencesState } from "./types";

const useStore = create<ReferencesState & ReferencesAction>()((set) => ({
  references: "",
  updateReferences: (references) => set(() => ({ references: references })),
}));

export { useStore as useReferencesStore };

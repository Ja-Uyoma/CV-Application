import { create } from "zustand";
import { QualificationsAction, QualificationsState } from "./types";

export const useStore = create<QualificationsState & QualificationsAction>()(
  (set) => ({
    qualifications: "",
    updateQualifications: (qualifications) =>
      set(() => ({ qualifications: qualifications })),
  })
);

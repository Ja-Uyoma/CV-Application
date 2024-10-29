import { create } from "zustand";
import { QualificationsAction, QualificationsState } from "./types";

const useStore = create<QualificationsState & QualificationsAction>()(
  (set) => ({
    qualifications: "",
    updateQualifications: (qualifications) =>
      set(() => ({ qualifications: qualifications })),
  })
);

export { useStore as useQualificationsStore };

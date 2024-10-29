import { create } from "zustand";
import { EmploymentAction, EmploymentState } from "./types";

const useStore = create<EmploymentState & EmploymentAction>()((set) => ({
  position: "",
  employer: "",
  startDate: "",
  endDate: "",
  description: "",
  updatePosition: (pos) => set(() => ({ position: pos })),
  updateEmployer: (employer) => set(() => ({ employer: employer })),
  updateStartDate: (sdate) => set(() => ({ startDate: sdate })),
  updateEndDate: (edate) => set(() => ({ endDate: edate })),
  updateDescription: (desc) => set(() => ({ description: desc })),
}));

export { useStore as useEmploymentStore };

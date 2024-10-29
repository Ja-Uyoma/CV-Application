import { create } from "zustand";

export type State = {
  position: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
};

type Action = {
  updatePosition: (position: State["position"]) => void;
  updateEmployer: (employer: State["employer"]) => void;
  updateStartDate: (sdate: State["startDate"]) => void;
  updateEndDate: (edate: State["endDate"]) => void;
  updateDescription: (desc: State["description"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
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

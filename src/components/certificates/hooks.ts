import { create } from "zustand";
import { Action, State } from "./types";

export const useStore = create<State & Action>()((set) => ({
  certificate: "",
  description: "",
  updateCertificate: (cert) => set(() => ({ certificate: cert })),
  updateDescription: (desc) => set(() => ({ description: desc })),
}));

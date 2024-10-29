import { create } from "zustand";
import { Action, State } from "./types";

export const useStore = create<State & Action>()((set) => ({
  month: "",
  updateMonth: (month) => set(() => ({ month: month })),
}));

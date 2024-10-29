import { create } from "zustand";
import { MonthAction, MonthState } from "./types";

export const useStore = create<MonthState & MonthAction>()((set) => ({
  month: "",
  updateMonth: (month) => set(() => ({ month: month })),
}));

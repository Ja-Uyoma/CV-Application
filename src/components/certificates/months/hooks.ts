import { create } from "zustand";
import { MonthAction, MonthState } from "./types";

const useStore = create<MonthState & MonthAction>()((set) => ({
  month: "",
  updateMonth: (month) => set(() => ({ month: month })),
}));

export { useStore as useMonthStore };

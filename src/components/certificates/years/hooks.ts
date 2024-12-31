import { create } from "zustand";
import { YearsAction, YearsState } from "./types";

const useStore = create<YearsState & YearsAction>()((set) => ({
  year: "",
  updateYear: (year) => set(() => ({ year: year })),
}));

export { useStore as useYearsStore };

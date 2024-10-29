import { create } from "zustand";
import { InterestsAction, InterestsState } from "./types";

export const useStore = create<InterestsState & InterestsAction>()((set) => ({
  interests: "",
  updateInterests: (interests) => set(() => ({ interests: interests })),
}));

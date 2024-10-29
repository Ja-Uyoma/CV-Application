import { create } from "zustand";
import { InterestsAction, InterestsState } from "./types";

const useStore = create<InterestsState & InterestsAction>()((set) => ({
  interests: "",
  updateInterests: (interests) => set(() => ({ interests: interests })),
}));

export { useStore as useInterestsStore };

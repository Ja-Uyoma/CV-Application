import { create } from "zustand";

export type State = {
  interests: string;
};

type Action = {
  updateInterests: (description: State["interests"]) => void;
};

export const useStore = create<State & Action>()((set) => ({
  interests: "",
  updateInterests: (interests) => set(() => ({ interests: interests })),
}));
